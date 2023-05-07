<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="账号id" prop="accountId">
        <el-input
          v-model="queryParams.accountId"
          placeholder="请输入账号id"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="患者昵称" prop="patientNickname">
        <el-input
          v-model="queryParams.patientNickname"
          placeholder="请输入患者昵称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="患者姓名" prop="patientName">
        <el-input
          v-model="queryParams.patientName"
          placeholder="请输入患者姓名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="患者性别" prop="patientGender">
        <el-select v-model="queryParams.patientGender" placeholder="请选择患者性别" clearable>
          <el-option
            v-for="dict in dict.type.sys_user_sex"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="患者体重" prop="patientWeight">
        <el-input
          v-model="queryParams.patientWeight"
          placeholder="请输入患者体重"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="出生年月" prop="patientBirthday">
        <el-date-picker clearable
                        v-model="queryParams.patientBirthday"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择出生年月">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="手机号" prop="patientPhone">
        <el-input
          v-model="queryParams.patientPhone"
          placeholder="请输入手机号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="邮箱" prop="patientEmail">
        <el-input
          v-model="queryParams.patientEmail"
          placeholder="请输入邮箱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="患者病情" prop="patientIllness">
        <el-input
          v-model="queryParams.patientIllness"
          placeholder="请输入患者病情"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="患者地址" prop="patientAddress">
        <el-input
          v-model="queryParams.patientAddress"
          placeholder="请输入患者地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="头像" prop="patientAvatar">
        <el-input
          v-model="queryParams.patientAvatar"
          placeholder="请输入头像"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件编号" prop="certificatesNumber">
        <el-input
          v-model="queryParams.certificatesNumber"
          placeholder="请输入证件编号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否有医保 0没有 1有" prop="isInsure">
        <el-input
          v-model="queryParams.isInsure"
          placeholder="请输入是否有医保 0没有 1有"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="微信openid" prop="openid">
        <el-input
          v-model="queryParams.openid"
          placeholder="请输入微信openid"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['yl:patient:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['yl:patient:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['yl:patient:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['yl:patient:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="patientList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="主键" align="center" prop="id" />
      <el-table-column label="账号id" align="center" prop="accountId" />
      <el-table-column label="患者昵称" align="center" prop="patientNickname" />
      <el-table-column label="患者姓名" align="center" prop="patientName" />
      <el-table-column label="患者性别" align="center" prop="patientGender">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_user_sex" :value="scope.row.patientGender"/>
        </template>
      </el-table-column>
      <el-table-column label="患者体重" align="center" prop="patientWeight" />
      <el-table-column label="出生年月" align="center" prop="patientBirthday" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.patientBirthday, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" align="center" prop="patientPhone" />
      <el-table-column label="邮箱" align="center" prop="patientEmail" />
      <el-table-column label="患者病情" align="center" prop="patientIllness" />
      <el-table-column label="患者地址" align="center" prop="patientAddress" />
      <el-table-column label="头像" align="center" prop="patientAvatar" />
      <el-table-column label="证件编号" align="center" prop="certificatesNumber" />
      <el-table-column label="是否有医保 0没有 1有" align="center" prop="isInsure" />
      <el-table-column label="头像" align="center" prop="patientImg" width="100">
        <template slot-scope="scope">
          <image-preview :src="scope.row.patientImg" :width="50" :height="50"/>
        </template>
      </el-table-column>
      <el-table-column label="微信openid" align="center" prop="openid" />
      <el-table-column label="用户类型" align="center" prop="userType" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['yl:patient:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['yl:patient:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改病人对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="账号id" prop="accountId">
          <el-input v-model="form.accountId" placeholder="请输入账号id" />
        </el-form-item>
        <el-form-item label="患者昵称" prop="patientNickname">
          <el-input v-model="form.patientNickname" placeholder="请输入患者昵称" />
        </el-form-item>
        <el-form-item label="患者姓名" prop="patientName">
          <el-input v-model="form.patientName" placeholder="请输入患者姓名" />
        </el-form-item>
        <el-form-item label="患者性别" prop="patientGender">
          <el-radio-group v-model="form.patientGender">
            <el-radio
              v-for="dict in dict.type.sys_user_sex"
              :key="dict.value"
              :label="dict.value"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="患者体重" prop="patientWeight">
          <el-input v-model="form.patientWeight" placeholder="请输入患者体重" />
        </el-form-item>
        <el-form-item label="出生年月" prop="patientBirthday">
          <el-date-picker clearable
                          v-model="form.patientBirthday"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择出生年月">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="手机号" prop="patientPhone">
          <el-input v-model="form.patientPhone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="邮箱" prop="patientEmail">
          <el-input v-model="form.patientEmail" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="患者病情" prop="patientIllness">
          <el-input v-model="form.patientIllness" placeholder="请输入患者病情" />
        </el-form-item>
        <el-form-item label="患者地址" prop="patientAddress">
          <el-input v-model="form.patientAddress" placeholder="请输入患者地址" />
        </el-form-item>
        <el-form-item label="头像" prop="patientAvatar">
          <el-input v-model="form.patientAvatar" placeholder="请输入头像" />
        </el-form-item>
        <el-form-item label="证件编号" prop="certificatesNumber">
          <el-input v-model="form.certificatesNumber" placeholder="请输入证件编号" />
        </el-form-item>
        <el-form-item label="是否有医保 0没有 1有" prop="isInsure">
          <el-input v-model="form.isInsure" placeholder="请输入是否有医保 0没有 1有" />
        </el-form-item>
        <el-form-item label="头像" prop="patientImg">
          <image-upload v-model="form.patientImg"/>
        </el-form-item>
        <el-form-item label="微信openid" prop="openid">
          <el-input v-model="form.openid" placeholder="请输入微信openid" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listPatient, getPatient, delPatient, addPatient, updatePatient } from "@/api/yl/patient";

export default {
  name: "Patient",
  dicts: ['sys_user_sex'],
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 病人表格数据
      patientList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        accountId: null,
        patientNickname: null,
        patientName: null,
        patientGender: null,
        patientWeight: null,
        patientBirthday: null,
        patientPhone: null,
        patientEmail: null,
        patientIllness: null,
        patientAddress: null,
        patientAvatar: null,
        certificatesNumber: null,
        isInsure: null,
        patientImg: null,
        openid: null,
        userType: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询病人列表 */
    getList() {
      this.loading = true;
      listPatient(this.queryParams).then(response => {
        this.patientList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        accountId: null,
        patientNickname: null,
        patientName: null,
        patientGender: null,
        patientWeight: null,
        patientBirthday: null,
        patientPhone: null,
        patientEmail: null,
        patientIllness: null,
        patientAddress: null,
        patientAvatar: null,
        certificatesNumber: null,
        isInsure: null,
        createTime: null,
        updateTime: null,
        patientImg: null,
        openid: null,
        userType: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加病人";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getPatient(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改病人";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updatePatient(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPatient(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除病人编号为"' + ids + '"的数据项？').then(function() {
        return delPatient(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('yl/patient/export', {
        ...this.queryParams
      }, `patient_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
