//局部注册组件
var Card = {
    template: '<Card style="width:320px">\n' +
    '        <div style="text-align:center">\n' +
    '            <img src="../../images/logo.png">\n' +
    '            <h3>A high quality UI Toolkit based on Vue.js</h3>\n' +
    '        </div>\n' +
    '    </Card>',
    data: function () {
        return {};
    },
    methods: {}
};

var app = new Vue({

    el: '#app',
    data: {},
    methods: {
        "enroll": function () {
            window.location="enroll/enroll.html"
        }
    },
    components:{
        'Card': Card
    }
});