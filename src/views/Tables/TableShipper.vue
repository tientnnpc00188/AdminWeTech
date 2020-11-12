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
                    <a class="nav-link active" data-toggle="tab" href="#working">Đang hoạt động</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#blocked">Đã chặn</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="working" class="container tab-pane active">
                    <br/>
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowData.length}}</a> Shipper</h5>
                      <table id="user" class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="name">Tên người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">Ảnh đại diện</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng hóa đơn</th>
                            <th scope="col" class="sort" data-sort="budget">Lương</th>

                            <th scope="col" class="sort" data-sort="budget">Số điện thoại</th>
                            <th scope="col" class="sort" data-sort="budget">Email</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>

                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowData, index) in rowData" v-bind:key="index">
                          <tr>
                            <td>{{rowData.shipper_id}}</td>
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
                            <td>{{rowData.order_quantity}}</td>
                            <td>{{rowData.salary}}</td>
                            <td>{{rowData.phone_number}}</td>
                            <td>{{rowData.email}}</td>

                            <td>{{rowData.address}}</td>
                            <td class="text-right">
                              <base-dropdown class="dropdown"
                                            position="right">
                                <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>

                                <template>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </template>
                              </base-dropdown>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
      blocked: [
        
      ]
    }
  },
  created(){
    this.getData()
    $('#shipper').DataTable();
  },
  methods: {
    getData(){
      let this2 = this
      axios.post(`${server}/detail-shipper`)
      .then(function (response) {
        this2.rowData = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
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