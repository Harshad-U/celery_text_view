const data= {template:`


<table class="table table-striped">
<thead>
    <tr>
      <th>
          Name
     </th>

      <th>
           size
      </th>
      <th>
        content
      </th>
      <th>
       modified
      </th>
      <th>
       created
     </th>
     <th>
        inserted date
     </th>

  </tr>
</thead>
<tbody>
    <tr>
        <td>{{this.$route.params.id[0]}}</td>
        <td>{{this.$route.params.id[1]}}</td>
        <td>{{this.$route.params.id[2]}}</td>
        <td>{{this.$route.params.id[3]}}</td>
         <td>{{this.$route.params.id[4]}}</td>
        <td>{{this.$route.params.id[5]}}</td>


     </tr>
</tbody>
</thead>
</table>

<h5>{{this.$route.params.id[0]}}</h5>

`}




