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
                    <a class="nav-link active" data-toggle="tab" href="#all">Tất cả</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#unactive">Chờ duyệt</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#active">Đã duyệt</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#update">Đã đóng gói</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#confirm">Đang giao</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#finish">Đã giao</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#cancel">Đã hủy</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="all" class="container tab-pane active">
                    <br/>
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowData.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="name">Trạng thái</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowData, index) in rowData" v-bind:key="index">
                          <tr>
                            <td>{{rowData.id}}</td>
                            <td>{{rowData.status}}</td>
                            <td class="label_title">{{rowData.user_id}}</td>
                            <td>{{rowData.shipper_id}}</td>
                            <td>{{rowData.address}}</td>
                            <td>{{rowData.shipping}}</td>
                            <td>{{rowData.total}}</td>
                            <td>{{rowData.order_detail}}</td>
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
                  <div id="unactive" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{unactive.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(unactive, listPackaged) in unactive" v-bind:key="listPackaged">
                          <tr>
                            <td>{{unactive.id}}</td>
                            <td class="label_title">{{unactive.user_id}}</td>
                            <td>{{unactive.shipper_id}}</td>
                            <td>{{unactive.address}}</td>
                            <td>{{unactive.shipping}}</td>
                            <td>{{unactive.total}}</td>
                            <td>{{unactive.order_detail}}</td>
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
                  <div id="active" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowActive.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowActive, index) in rowActive" v-bind:key="index">
                          <tr>
                            <td>{{rowActive.id}}</td>
                            <td class="label_title">{{rowActive.user_id}}</td>
                            <td>{{rowActive.shipper_id}}</td>
                            <td>{{rowActive.address}}</td>
                            <td>{{rowActive.shipping}}</td>
                            <td>{{rowActive.total}}</td>
                            <td>{{rowActive.order_detail}}</td>
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
                  <div id="update" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowUpdate.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowUpdate, index) in rowUpdate" v-bind:key="index">
                          <tr>
                            <td>{{rowUpdate.id}}</td>
                            <td class="label_title">{{rowUpdate.user_id}}</td>
                            <td>{{rowUpdate.shipper_id}}</td>
                            <td>{{rowUpdate.address}}</td>
                            <td>{{rowUpdate.shipping}}</td>
                            <td>{{rowUpdate.total}}</td>
                            <td>{{rowUpdate.order_detail}}</td>
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
                  <div id="confirm" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowConfirm.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowConfirm, index) in rowConfirm" v-bind:key="index">
                          <tr>
                            <td>{{rowConfirm.id}}</td>
                            <td class="label_title">{{rowConfirm.user_id}}</td>
                            <td>{{rowConfirm.shipper_id}}</td>
                            <td>{{rowConfirm.address}}</td>
                            <td>{{rowConfirm.shipping}}</td>
                            <td>{{rowConfirm.total}}</td>
                            <td>{{rowConfirm.order_detail}}</td>
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
                  <div id="finish" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowFinish.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowFinish, index) in rowFinish" v-bind:key="index">
                          <tr>
                            <td>{{rowFinish.id}}</td>
                            <td class="label_title">{{rowFinish.user_id}}</td>
                            <td>{{rowFinish.shipper_id}}</td>
                            <td>{{rowFinish.address}}</td>
                            <td>{{rowFinish.shipping}}</td>
                            <td>{{rowFinish.total}}</td>
                            <td>{{rowFinish.order_detail}}</td>
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
                  <div id="cancel" class="container tab-pane fade">
                    <br />
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowCancel.length}}</a> Đơn Hàng</h5>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="budget">ID người dùng</th>
                            <th scope="col" class="sort" data-sort="budget">ID Shipper</th>
                            <th scope="col" class="sort" data-sort="budget">Địa chỉ</th>
                            <th scope="col" class="sort" data-sort="budget">Phí vận chuyển</th>
                            <th scope="col" class="sort" data-sort="budget">Tổng tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Chi tiết đơn hàng</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowCancel, index) in rowCancel" v-bind:key="index">
                          <tr>
                            <td>{{rowCancel.id}}</td>
                            <td class="label_title">{{rowCancel.user_id}}</td>
                            <td>{{rowCancel.shipper_id}}</td>
                            <td>{{rowCancel.address}}</td>
                            <td>{{rowCancel.shipping}}</td>
                            <td>{{rowCancel.total}}</td>
                            <td>{{rowCancel.order_detail}}</td>
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
// import $ from 'jquery'
import {server} from './../../main'

export default {
  data(){
    return{
      rowData: [],
      unactive: [],
      rowActive: [],
      rowupdate: [],
      rowConfirm: {},
      rowFinish: [],
      rowCancel: [],
    }
  },
  created(){
    this.getData()
    this.getUnAct()
    this.getActive()
    this.getUpdate()
    this.getConfirm()
    this.getFinish()
    this.getCancel()
    // this.divide()
    // $('#order').DataTable();
  },
  methods: {
    getData(){
      let this2 = this
      axios.post(`${server}/order`)
      .then(function (response) {
        this2.rowData = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getUnAct() {
      let this2 = this
      axios.post(`${server}/unactive-order-admin`)
      .then(function (response) {
        this2.unactive = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getActive() {
      let this2 = this
      axios.post(`${server}/active-order-admin`)
      .then(function (response) {
        this2.rowActive = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getUpdate() {
      let this2 = this
      axios.post(`${server}/update-order-admin`)
      .then(function (response) {
        this2.rowUpdate = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getConfirm() {
      let this2 = this
      axios.post(`${server}/confirm-order-admin`)
      .then(function (response) {
        this2.rowConfirm = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getFinish() {
      let this2 = this
      axios.post(`${server}/finish-order-admin`)
      .then(function (response) {
        this2.rowFinish = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getCancel() {
      let this2 = this
      axios.post(`${server}/cancel-order-admin`)
      .then(function (response) {
        this2.rowCancel = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

  },
};
</script>

<style>
  .btn-update{
    background-color: #109e86;
    border: none;
    color: white;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 5px
  }
  .btn-update:hover{
    background-color: #e0512e;
  }
  .label_title {
    margin: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>