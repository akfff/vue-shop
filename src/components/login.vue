<template>
    <div class="login-container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单 -->
            <!-- ref的值就是组件的实例对象 -->
            <el-form label-width="0px" class="login-form" :model="form" :rules="loginRules" ref="loginFormRef">
                <!-- 名字 -->
                <el-form-item prop="username">
                    <el-input prefix-icon="iconfont icon-yonghu" v-model="form.username"></el-input>
                </el-form-item>

                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icon-mima" v-model="form.password" type="password"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item class="login-btns">

                    <el-button type="primary" @click="login"> 登录</el-button>
                    <el-button type="info" @click="resetLoginForm"> 重置</el-button>

                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: '123456'
            },
            // 表单验证规则
            loginRules: {
                // 名字验证
                username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                // 密码验证
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 重置表单
        resetLoginForm() {
            // console.log(this);
            this.$refs.loginFormRef.resetFields();
        },
        // 登录验证
        // vaild验证结果
        async login() {
            this.$refs.loginFormRef.validate(async vaild => {
                if (!vaild) return;
                // 解构赋值
                const { data: res } = await this.$http.post("login", this.form)
                if (res.meta.status !== 200) {
                    return this.$message.error("登陆失败")
                }
                this.$message.success("登陆成功")
                console.log(res);
                window.sessionStorage.setItem("token", res.data.token)
                // 1.保存token到sessionStorage
                // 2.跳转到后台
                this.$router.push('/home')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    background-color: #2b4b6b;
    height: 100%;
    position: relative;

    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .avatar_box {
            height: 130px;
            width: 130px;
            border: 1px solid #ccc;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;


            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #ddd;

            }
        }

        .login-form {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }



        .login-btns {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>