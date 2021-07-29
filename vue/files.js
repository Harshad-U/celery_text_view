const files={template:`
<div>
      <div class="d-flex flex-row">
              <input class="form-control m-2"
                v-model="insertedFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter Name,Content,Inserted Date">
      </div>






<table class="table table-striped">
<thead>
    <tr>
        <th>FILE NAME</th>
        <th>FILE SIZE</th>
        <th>CONTENT</th>

        <th>

            MODIFIED DATE
        </th>
        <th>CREATED DATE</th>

        <th>PROCESSED DATE</th>

    </tr>
</thead>
<tbody>
    <tr v-for="dep in file">

        <td>
        {{dep.filename}}


        </td>
        <td>{{dep.file_size}}</td>
        <td>

            {{dep.content}}
            <button class="btn btn-light mr-1" type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="viewpop(dep)">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                   <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                   </svg>
             </button>
        </td>
        <td>{{dep.modified}}</td>
        <td>{{dep.created}}</td>

        <td>{{dep.date_inserted}}</td>

    </tr>
</tbody>

</table>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
       <div class="modal-content">
          <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">{{content}}</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
          </div>
         <div class="modal-body">
           <div class="input-group mb-3">
              <h5>{{full_data}}</h5>
           </div>
           <button class="btn btn-light mr-1"
            data-bs-dismiss="modal"
            @click="datas(filename,file_size,content,modified,created,date_inserted)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>

                  </svg>


         </button>
         </div>

       </div>
    </div>
</div>








</div>
`,

data(){
    return{
        file:[],
        modalTitle:"",
        filename:"",
        file_size:"",
        content:"",
        modified:"",
        created:"",
        hash_value:"",
        date_inserted:"",

        filewithoutfilter:[],


    }
},
methods:{
    refreshData(){
         axios.get(variables.API_URL+"filedata")
         .then((response)=>{
            this.file=response.data;
            this.filewithoutfilter=response.data;

        });
    },
    datas(a,b,c,d,e,f){
        this.value = [a,b,c,d,e,f];
        this.$router.push({name:"data",params:{id:this.value}});
    },
    FilterFn(){
              var insertedFilter=this.insertedFilter;

              this.file=this.filewithoutfilter.filter(
                    function(el){
                       return (el.date_inserted.toString().toLowerCase().includes(
                                insertedFilter.toString().trim().toLowerCase()
                               ) || el.filename.toString().toLowerCase().includes(
                              insertedFilter.toString().trim().toLowerCase()
                              )) || el.content.toString().toLowerCase().includes(
                               insertedFilter.toString().trim().toLowerCase()
                              )
                           });
     },
    viewpop(dep){
        this.modalTitle="content";
        this.content=dep.content;
        this.file_size=dep.file_size;
        this.filename=dep.filename;
        this.modified=dep.modified;
        this.created=dep.created;
        this.date_inserted=dep.date_inserted;
        if(dep.full_data == null){
            this.full_data = dep.content;
            return full_data;
        }
        else{
           this.full_data=dep.full_data;
           return full_data;
        }

    },


},
mounted:function(){
    this.refreshData();
}

}