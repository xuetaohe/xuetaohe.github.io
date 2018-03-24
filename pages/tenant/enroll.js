var Main = {
    data: function () {
        return {
            formItem: {
                tenantName: '',
                orgnization: '',
                mobile: '',
                otp: '',
                dbType: ''
            },
            dbList: [
                {dbType: 'postgresql', dbName: 'PostgreSQL'},
                {dbType: 'oracle', dbName: 'Oracle'}
            ]
        }
    },
    methods: {
        "enroll": function (e) {
            var button = e.currentTarget;
            button.disabled = true;
            var _this = this;
            $.ajax({
                url: '/tenant/enroll',
                method: 'POST',
                contentType: "application/json",
                dataType: 'json',
                data: JSON.stringify(this.formItem)
            }).done(function (result, status, response) {
                if (result.code == 200) {
                    var tenantId = result.data.tenantId;
                    _this.success(false, tenantId);
                }else {
                    _this.error(false, result.message);
                    button.disabled = false;
                }
            }).fail(function (response, status, error) {
                _this.error(false, result.message);
                button.disabled = false;
            }).always(function (result, status, response) {

            });
        },
        cancle: function () {

        },
        success: function (nodesc, tenantId) {
            this.$Notice.success({
                title: '恭喜，您的用户注册成功！',
                desc: nodesc ? '' : '您的用户编号：' + tenantId
            });
        },
        error: function(nodesc, message) {
            this.$Notice.error({
                title: '抱歉，用户注册失败！',
                desc: nodesc ? '' : '错误代码：' + message,
                duration: 0
            });
        }
    }
}

var Component = Vue.extend(Main)
new Component().$mount('#app')