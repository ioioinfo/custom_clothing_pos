
// 框架
class Repair extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e) {
        var $loadingToast = $('#loadingToast');
            if ($loadingToast.css('display') != 'none') return;

            $loadingToast.fadeIn(100);
            setTimeout(function () {
                $loadingToast.fadeOut(100);
            }, 1000);
    }

    render() {
        var style = {display:"none"};
        return (
            <div className="repair_wrap">
                <div className="repair_input_wrap">
                    <input type="text" placeholder="请输入订单单号" className="repair_input" />
                    <span className="repair_input_button">提 交</span>
                </div>
                <hr/>
                <div className="repair_infor_wrap">
                    <div className="repair_infor_left repair_infor_style">
                        <Product/>
                    </div>
                    <div className="repair_infor_right repair_infor_style">
                        <textarea className="textarea_style" placeholder="请输入返修说明："></textarea>
                    </div>
                </div>
                <div className="button_wrap"><button onClick={this.handleClick}>提 交</button></div>

                <div id="loadingToast" style={style}>
                    <div className="weui-mask_transparent"></div>
                    <div className="weui-toast">
                        <i className="weui-loading weui-icon_toast"></i>
                        <p className="weui-toast__content">提交成功</p>
                    </div>
                </div>
            </div>
        );
    }
};

// 商品
class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="left_wrap">
                <div className="order_list_time">
                    <p>下单时间：<span>2017-10-25 14:11</span></p>
                    <p>等待取货</p>
                </div>

                <div className="order_list_pruduct">
                    <div className="product_img product_infor"><img src="images/shangyi.jpg" className="product_img_infor" /></div>
                    <div className="product_infor"><p>单号</p><p className="">12345</p></div>
                    <div className="product_infor"><p>名称</p><p>毛衣</p></div>
                    <div className="product_infor"><p>售价</p><p>¥288.00</p></div>
                    <div className="product_infor"><p>已付</p><p>¥100.00</p></div>
                    <div className="product_infor"><p>未付</p><p className="weifu_price">¥188.00</p></div>
                </div>
            </div>
        );
    }
};

// 返回到页面
ReactDOM.render(
  <Repair/>,
  document.getElementById("repair")
);
