const data= {template:`
         <div>
           <h5>File Name :{{this.$route.params.id[0]}}</h5>
           <h5>Date :{{this.$route.params.id[5]}}
           <h5>Content</h5>
           <p>{{this.$route.params.id[2]}}</p>
           <router-link
                to="/files"><button class="btn btn-light btn-outline-danger">Exit</button></router-link>

           <router-view></router-view>
         </div>



`}




