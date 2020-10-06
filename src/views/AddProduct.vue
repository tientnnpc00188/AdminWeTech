<template>
  <div>
    <!-- Main content -->
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <h5>Thêm sản phẩm</h5>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">Thông tin cơ bản</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-productname">
                          Tên sản
                          phẩm
                        </label>
                        <input type="text"
                          class="form-control"
                          placeholder="Tên sản phẩm"
                          value
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-code">Mã sản phẩm</label>
                        <input
                          type="text"
                          id="input-code"
                          class="form-control"
                          placeholder="VD: GNSPORT224"
                          value
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-price">Đơn giá</label>
                        <input
                          type="text"
                          id="input-price"
                          class="form-control"
                          placeholder="99.000 VNĐ"
                          value
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-warehouse">
                          Số lượng
                          nhập
                        </label>
                        <input
                          type="text"
                          id="input-warehouse"
                          class="form-control"
                          placeholder="99"
                          value
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Loại sản phẩm</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Danh mục</label>
                        <select
                          name
                          id="input-productname"
                          for="input-productname"
                          class="form-control"
                        >
                          <option value></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Thương hiệu</label>
                        <select
                          name
                          id="input-productname"
                          for="input-productname"
                          class="form-control"
                        >
                          <option value></option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Màu sắc</label>
                        <select
                          name
                          id="input-productname"
                          for="input-productname"
                          class="form-control"
                        >
                          <option value></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Kích cở</label>
                        <select
                          name
                          id="input-productname"
                          for="input-productname"
                          class="form-control"
                        >
                          <option value></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Mô tả</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">Mô tả ngắn</label>
                    <textarea rows="4" class="form-control" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Upload hình ảnh</label>
                    <div class="input-group mb-3">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile01"
                           aria-describedby="inputGroupFileAddon01"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-danger" type="submit">Thêm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Mô tả chi tiết</label>
                    <textarea rows="4" class="form-control" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                  </div>
                  <div class="form-group">
                    <input type="button" class="btn btn-primary" name value="Thêm sản phẩm" />
                    <input type="button" class="btn btn-danger" name value="Hủy" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>