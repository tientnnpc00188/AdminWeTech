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
                    <a class="nav-link active" data-toggle="tab" href="#shop">Đang hoạt động</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#unactive">Chờ duyệt</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#blocked">Đã chặn</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="shop" class="container tab-pane active">
                    <br/>
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowData.length}}</a> Cửa Hàng</h5>
                      <table id="shop" class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="name">Tên cửa hàng</th>
                            <th scope="col" class="sort" data-sort="name">Tên người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">Ảnh đại diện</th>
                            <th scope="col" class="sort" data-sort="budget">CMND</th>
                            <th scope="col" class="sort" data-sort="budget">Số điện thoại</th>
                            <th scope="col" class="sort" data-sort="budget">Email</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowData, index) in rowData" v-bind:key="index">
                          <tr>
                            <td>{{rowData.shop_id}}</td>
                            <td>{{rowData.shop_name}}</td>
                            <td>{{rowData.name}}</td>
                            <th scope="row">
                              <div class="media align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                  <img
                                    alt="Chưa có ảnh"
                                    v-bind:src="rowData.avatar"
                                  />
                                </a>
                              </div>
                            </th>
                            <td>{{rowData.identity_card}}</td>
                            <td>{{rowData.phone_number}}</td>
                            <td>{{rowData.email}}</td>
                            <td>{{rowData.address}}</td>
                            <td>
                              <button class="btn btn-danger" @click="deleteData(rowData)">Chặn</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="unactive" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowUnActive.length}}</a> Cửa Hàng</h5>
                      <table id="unactive" class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="name">Tên cửa hàng</th>
                            <th scope="col" class="sort" data-sort="name">Tên người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">Ảnh đại diện</th>
                            <th scope="col" class="sort" data-sort="budget">CMND</th>
                            <th scope="col" class="sort" data-sort="budget">Số điện thoại</th>
                            <th scope="col" class="sort" data-sort="budget">Email</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowUnActive, index) in rowUnActive" v-bind:key="index">
                          <tr>
                            <td>{{rowUnActive.shop_id}}</td>
                            <td>{{rowUnActive.shop_name}}</td>
                            <td>{{rowUnActive.name}}</td>
                            <th scope="row">
                              <div class="media align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                  <img
                                    alt="Chưa có ảnh"
                                    v-bind:src="rowUnActive.avatar"
                                  />
                                </a>
                              </div>
                            </th>
                            <td>{{rowUnActive.identity_card}}</td>
                            <td>{{rowUnActive.phone_number}}</td>
                            <td>{{rowUnActive.email}}</td>
                            <td>{{rowUnActive.address}}</td>
                            <td>
                              <button class="btn btn-danger" @click="deleteData(rowUnActive)">Xóa</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
      rowUnActive: [
        
      ]
    }
  },
  created(){
    this.getData();
    this.getUnAct();
    $('#shop').DataTable();
    $('#unactive').DataTable();
  },
  methods: {
    getData(){
      let this2 = this
      axios.post(`${server}/get-shop`)
      .then(function (response) {
        this2.rowData = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getUnAct(){
      let this2 = this
      axios.post(`${server}/unactive-shop`)
      .then(function (response) {
        this2.rowUnActive = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    // deleteData(rowData) {
    //   axios.post(`${server}/delete-shop`,{
    //     id:rowData.shop_id
    //   })
    //   .then(response => {
    //     console.log(response.data)
    //   })
    //   console.log(rowData)
    // }
  }
};
</script>

<style>
  .label_title {
    margin: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

  }
</style>