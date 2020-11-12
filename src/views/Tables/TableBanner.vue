<template>
  <div>
    <!-- Main content -->
    <div>
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row justify-content-center">
          <div class="col">
            <div class="card">
              <div class="container">
                <br />
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#banner">Danh sách Banner</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#add">Thêm</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="banner" class="container tab-pane active">
                    <br/>
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowData.length}}</a> Banner</h5>
                      <table id="shop" class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">Hình ảnh</th>
                            <th scope="col" class="sort" data-sort="budget">Trạng thái</th>
                            <th scope="col" class="sort" data-sort="budget">hành động</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowData, index) in rowData" v-bind:key="index">
                          <tr>
                            <td>{{rowData.id}}</td>
                            <td><img
                                    style="width: 100px"
                                    v-bind:src="rowData.image"
                                  /></td>
                            <td><toggle-button @change="onChangeEventHandler"/></td>
                            <td>
                              <button class="btn btn-danger" @click="deleteData(rowData, index)">Xóa</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-footer py-4">
                  <nav aria-label="...">
                    <ul class="pagination justify-content-end mb-0">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">
                          <i class="fas fa-angle-left"></i>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                          <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fas fa-angle-right"></i>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                  </div>
                  <div id="add" class="container tab-pane active">
                    <br />
                    <div class="form-group">
                      <label class="form-control-label">Upload hình ảnh</label>
                      <div class="input-group mb-3">
                        <div class="row">
                          <input
                            type="file"
                            ref="fileInputA"
                            hidden
                            v-on:change="handleFileUpload()"
                          />
                          <img @click="openFile" class="ml-3" :src="tempImage" width="100" />
                          
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    <br />
                    
                  </div>
                  
                  <!-- <div id="blocked" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">Mã cửa hàng</th>
                            <th scope="col" class="sort" data-sort="name">Tên cửa hàng</th>
                            <th scope="col" class="sort" data-sort="budget">Số điện thoại</th>
<th scope="col" class="sort" data-sort="status">Mail</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(blocked, index) in blocked" v-bind:key="index">
                          <tr>
                            <td>{{blocked.idStore}}</td>
                            <th scope="row">
                              <div class="media align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                  <img
                                    alt="Image placeholder"
                                    v-bind:src="blocked.avatarStore"
                                  />
                                </a>
                                <div class="media-body">
                                  <span class="name mb-0 text-sm">{{blocked.nameStore}}</span>
                                </div>
                              </div>
                            </th>
                            <td>{{blocked.phoneStore}}</td>
                            <td>
                              {{blocked.mailStore}}
                            </td>
                            <td class="text-right">
                              <div class="dropdown">
                                <a
                                  class="btn btn-sm btn-icon-only text-light"
                                  href="#"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                  <a class="dropdown-item" href="javascript:void(0)">Chi tiết cửa hàng</a>
                                  <a class="dropdown-item" href="javascript:void(0)">Duyệt cửa hàng</a>
                                  <a class="dropdown-item" href="javascript:void(0)">Xóa cửa hàng</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> -->
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import {server} from './../../main'
export default {
  data(){
    return{
      rowData: [
        
      ],
      
      blocked: [
        
      ],
      file:null,
tempImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABXs7e0ADyIAAAacnqAtOUMAABEcKjamp6pYX2UdJTCtsLN8gIQAABvk5eYAAA3Bw8UpND4gLTkyPUZqbnOWmZyGiYx6foMXHywYHyxrcHW4u73a3N1ASFEAECD3KgboAAACYElEQVR4nO3c63KaQBiAYWAxKBVijEbRYAxJc+j9X2DBnhbcTpFhT/Z9fjIfie+M4mGBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwxcTuiy6ZsB138hjpM7Md10jLONSlWE9s59XS+1xbYXzjTGFyO77CpcL5KsjGFkwLhwqXq/EPemKaUGgIhUNRaA6FQ1FozjUWirTlUBdu0lHIPRYLxba8kzzVn5Dzw90YyqP0VLBXKKoob2m+BOTj2B//FNkrnNzo+z6YP6SuFMbz8dV/Nr93pTBeL8Z3LBwqTKapGFu6WjpVqOH9j0JjKByKQnMoHIpCcy4rFGnvST8LxXNZ9R31slBsojh67jnrZ+FLUX9K7/coPS3cUijNUmgMhTIKW7MUGkOhjMLWLIXGUCijsDXrcWH678HAk8LztYgfhd3NyoftQ6GoXh86XptVwe7Gr2/KvT0ofI/OFnVD5QJxtFDs7kGhWOx7LvUmWz8Lgyy53Xc0C+J5d+M++lDs7UNhkG261nGYf753t+58fR2eH0z/cixV7+tFYdf/8o5P4c9ZCo2hUEZha5ZCYyiUUdiapdAYCmUUtmY7hRM/CqtlWBwvKfz4faX67MXWNaQXnTG0+xYpf7JQaArDXLpS3dp1wBee19b7rgGnwg4vCntTFc6Vv6zqprUwb99SodyN/m960Hr25aG9xmHnthimzi+1h8KhKDSHwqHcKiwqDfcyWc0dKgwLDXdMSkKXCjVxpHBdaCuMSxcKg5mGZ+gvj7bjTkQ200W5OAwAAAAAAAAAAAAAAAAAAAAAAAAAAADganwH5zd6LobMFeIAAAAASUVORK5CYII="
    }
  },
  created(){
    this.getData();
    // this.getDelete();
    $('#banner').DataTable();
  },
  methods: {
    getData(){
      let this2 = this
      axios.post(`${server}/banner`)
      .then(function (response) {
        this2.rowData = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },
    openFile(){
      this.$refs.fileInputA.click()
    },
    handleFileUpload() {
      this.file = this.$refs.fileInputA.files[0];
      let formData = new FormData();
      formData.append('image', this.file);
      formData.append('status',0)

      axios.post(`${server}/add-banner`,
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then( async response => {  
        //goi lai ham insertImage khi da co du lieu tra ve tu server
        if(response.data.success){
          this.getData()
        }
            
      })

    },
    deleteData(rowData) {
      axios.post(`${server}/delete-banner`,{
        id:rowData.id
      })
      .then(response => {
        if(response.data.success){
          this.getData()
        }
       
      })
    }
  }
};
</script>

<style>
</style>