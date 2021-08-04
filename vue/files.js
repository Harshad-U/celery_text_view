const files={template:`
<div>
      <div class="d-flex flex-row">
              <input class="form-control m-2"
                v-model="insertedFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter Name,Content,Processed Date">
      </div>






<table class="table table-striped" >
    <thead>
        <tr>
            <th>FILE NAME</th>
            <th>CONTENT</th>
            <th>MODIFIED DATE</th>
            <th>CREATED DATE</th>
            <th>PROCESSED DATE</th>
            <th></th>
        </tr>
    </thead>
  <tbody>
    <tr v-for="dep in file">
        <td>{{dep.filename}}</td>
        <td>
          <div style="max-width: 150px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">

               {{dep.content}}

          </div>

            <button class="btn btn-light mr-1" type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="viewpop(dep)">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                       <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                   </svg>
            </button>

        </td>
        <td>
             {{dep.modified}}
        </td>
        <td>{{dep.created}}</td>

        <td>{{dep.date_inserted}}</td>
        <td>
             <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                @click="editClick(dep)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
             </button>
             <button type="button" @click="deleteClick(dep.fileId)"
               class="btn btn-light mr-1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                   <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                 </svg>
             </button>
        </td>

    </tr>
  </tbody>

</table>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
       <div class="modal-content">
          <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close">
             </button>
          </div>
          <div class="modal-body">
             <div class="input-group mb-3">
                <h5>{{content}}</h5>
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
<div class="modal fade" id="exampleModal1" tabindex="-1"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg modal-dialog-centered">
         <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                     aria-label="Close">
                  </button>
              </div>
              <div class="modal-body">
                  <div class="d-flex flex-row bd-highlight mb-3">
                      <div class="p-2 w-50 bd-highlight">

                           <div class="input-group mb-3">
                               <span class="input-group-text">Data</span>
                               <input type="textarea" class="form-control" v-model="content" >
                           </div>
                      </div>
                  </div>
                  <button type="button" @click="updateClick()"
                     class="btn btn-primary">
                     Update
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
        fileId:"0",
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
    datas(fname,fsize,contnt,modidate,createdate,insertdate){

         this.value = [fname,fsize,contnt,modidate,createdate,insertdate];
         this.$router.push({name:"data",params:{id:this.value}});
         //let vvv=this.$router.push({name:"data",params:{id:this.value}});
         //console.log(vvv)
         //let ddd=this.$router.resolve({name:"data",params:{id:this.value}});
         //let routeData = this.$router.resolve({name: 'routeName', query: {data: "someData"}});
         //window.open(ddd.href, '_blank');
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
        this.modalTitle="Content";
        this.content=dep.content;
        this.filename=dep.filename;
        this.date_inserted=dep.date_inserted;
        this.modified=dep.modified;
        this.created=dep.created;

    },

    editClick(dep){
        this.modalTitle="Edit Details";
        this.fileId = dep.fileId;
        this.filename = dep.filename;
        this.file_size=dep.file_size;
        this.content = dep.content;
        this.modified = dep.modified;
        this.created = dep.created;
        this.hash_value = dep.hash_value;
        this.date_inserted = dep.date_inserted;

    },

    updateClick(){
        axios.put(variables.API_URL+"filedata",{
            fileId:this.fileId,
            filename:this.filename,
            file_size:this.file_size,
            content:this.content,
            modified:this.modified,
            created:this.created,
            hash_value:this.hash_value,
            date_inserted:this.date_inserted


        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"filedata/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },


},
mounted:function(){
    this.refreshData();
}

}