// 框架
class Pos extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={items:[],items1:[],items2:[],items3:[]};
    }
    componentDidMount() {
        var list = [{title:"身高",key:"1"},{title:"体重",key:"2"},{title:"试样尺码",key:"3"},{title:"肩宽",key:"4"},
                    {title:"衣长",key:"5"},{title:"袖长",key:"6"},{title:"胸围",key:"7"},{title:"袖状",key:"8"},
                    {title:"中腰",key:"9"},{title:"袖口",key:"10"},{title:"腹围",key:"11"},{title:"前胸",key:"12"},
                    {title:"臀围",key:"13"},{title:"后背",key:"14"},{title:"BP点",key:"15"},{title:"前腹高",key:"16"},
                    {title:"胸距",key:"17"},{title:"后臀高",key:"18"},{title:"前腰节",key:"19"},{title:"袖笼长",key:"20"},{title:"后腰节",key:"21"},];
        var list1 = [{title:"挺胸"},{title:"冲肩"},{title:"胸大"},{title:"溜肩"},
                    {title:"驼背"},{title:"平肩"},{title:"背圆"},{title:"圆体"},
                    {title:"胃大"},{title:"扁体"},{title:"肚子大"},{title:"凹背"},
                    {title:"高臀"},{title:"凹腰"}];
        var list2 = [{title:"裤长",key:"1"},{title:"臀高",key:"2"},{title:"裙长",key:"3"},{title:"腹高",key:"4"},
                    {title:"腰围",key:"5"},{title:"横档",key:"6"},{title:"腹围",key:"7"},{title:"立档",key:"8"},
                    {title:"臀围",key:"9"},{title:"脚口",key:"10"}];
        var list3 = [{title:"量体师",key:"1"},{title:"版型师",key:"2"},{title:"裁剪师",key:"3"},{title:"缝纫工",key:"4"},
                    {title:"手工",key:"5"},{title:"质检",key:"6"}];
                    this.setState({items:list,items1:list1,items2:list2,items3:list3});
        $(".check_order").css("z-index","-99");
        var width = $(".clothing_kuanhao_number").width();
        $(".clothing_kuanhao_input").css("text-indent",width);
    }
    handleClick(e){
        $(".backgroundOpacitv").hide();
        $(".check_order").css("z-index","-99");
        $(".pay_wrap").hide();
    }
  render() {
    return (
        <div className="pos_wrap">
            <div className="pos_left">
                <Left/>
            </div>
            <div className="pos_right">
                <PosRightTop/>
                <PosRightBottom/>
            </div>
            <div className="backgroundOpacitv" onClick={this.handleClick}></div>
            <div className="check_order">
                <div className="check_order_top">
                    <div className="clothing_kuanhao">
                        <span className="clothing_kuanhao_number">服装款号：</span><input type="text" className="clothing_kuanhao_input" />
                    </div>
                    <hr/>
                    <div className="partOne">
                        {this.state.items.map((item,index)=>(
                            <InputOne item={item} key={index}/>
                        ))}
                    </div>
                    <hr/>
                    <div className="partTwo">
                        {this.state.items1.map((item,index)=>(
                            <InputTwo item={item} key={index}/>
                        ))}
                    </div>
                    <hr/>
                    <div className="partThree">
                        <InputThree/>
                    </div>
                    <hr/>
                    <div className="partFour">
                        {this.state.items2.map((item,index)=>(
                            <InputFour item={item} key={index}/>
                        ))}
                    </div>
                    <hr/>
                    <div className="partFive">
                        {this.state.items3.map((item,index)=>(
                            <InputFive item={item} key={index}/>
                        ))}
                    </div>
                    <hr/>
                    <InputSix/>
                </div>
            </div>
            <Pay/>
            <PayWay/>
            <Toast/>
            <ShouHuo/>
        </div>
    );
  }
};
class Left extends React.Component {
    componentDidMount() {
        var height = $(window).height() - 64;
        $("#product_list").css({"height":height,"overflow":"auto"});
    }
    render() {
        return (
            <div>
                <div className="search_wrap">
                    <div className="worker_man">工号001</div>
                    <div id="search">
                        <input type="text" placeholder="搜索..."/>
                        <button type="submit" className="tip-right" title="Search">
                          <i className="fa fa-search icon icon_style_search"></i>
                        </button>
                    </div>
                </div>
                <div id="product_list">
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                </div>
            </div>
        );
    }
};

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleClick1=this.handleClick1.bind(this);
        this.state = {};
    }

    componentDidMount() {

    }
    handleClick(e){
        $(".backgroundOpacitv").show();
        $(".check_order").css("z-index","199");
    }
    handleClick1(e){
        $(".backgroundOpacitv").show();
        $(".pay_wrap").show();
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
            <div className="order_list_button">
                <span className="button button1"><i className="fa fa-close icon"></i>删除</span>
                <span className="button button2" onClick={this.handleClick}><i className="fa fa-eye icon"></i>查看</span>
                <span className="button button3" onClick={this.handleClick1}><i className="fa fa-credit-card icon"></i>支付</span>
            </div>
        </div>
        );
    }
};
// 输入列表
class InputOne extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
      var width = $(".title"+this.props.item.key).width();
      $(".input"+ this.props.item.key).css("text-indent",width);
    }
    render() {
        return (
            <div className="inputList_one">
                <span className={"person_infor_title title" + this.props.item.key}>{this.props.item.title}：</span>
                <input type="text" name="text" className={"person_infor_number input"+ this.props.item.key} />
            </div>
        );
    }
};
// checked
class InputTwo extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="inputList_two">
            <span className="person_infor_title">{this.props.item.title}：</span>
            <div className="person_infor_number1">
                <p className="person_infor_number1_p">
                    <span className="person_infor_number1_p_span">小 &nbsp; <input type="checkbox" className="checedkox" /></span>
                    <span className="person_infor_number1_p_span">中 &nbsp; <input type="checkbox" className="checedkox" /></span>
                    <span className="person_infor_number1_p_span">大 &nbsp; <input type="checkbox" className="checedkox" /></span>
                </p>
            </div>
        </div>
    );
  }
};
// checked
class InputThree extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="inputList_three">
            <span className="inputList_three_span">紧身 &nbsp; <input type="checkbox" className="checedkox" /></span>
            <span className="inputList_three_span">合身 &nbsp; <input type="checkbox" className="checedkox" /></span>
            <span className="inputList_three_span">略宽松 &nbsp; <input type="checkbox" className="checedkox" /></span>
            <span className="inputList_three_span">宽松 &nbsp; <input type="checkbox" className="checedkox" /></span>
        </div>
    );
  }
};
// 输入列表
class InputFour extends React.Component {
  componentDidMount() {
      var width = $(".titleOne"+this.props.item.key).width();
      $(".inputOne"+ this.props.item.key).css("text-indent",width);
  }
  render() {
    return (
        <div className="inputList_one">
            <span className={"person_infor_title titleOne" + this.props.item.key}>{this.props.item.title}：</span>
            <input type="text" name="text" className={"person_infor_number inputOne"+ this.props.item.key} />
        </div>
    );
  }
};
// 输入列表
class InputFive extends React.Component {
  componentDidMount() {
      var width = $(".titleTwo"+this.props.item.key).width();
      $(".inputTwo"+ this.props.item.key).css("text-indent",width);
  }
  render() {
    return (
        <div className="inputList_one">
            <span className={"person_infor_title titleTwo" + this.props.item.key}>{this.props.item.title}：</span>
            <input type="text" name="text" className={"person_infor_number inputTwo"+ this.props.item.key} />
        </div>
    );
  }
};
// 输入列表
class InputSix extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="partSix">
            <div className="six_left">
                <textarea className="six_textarea" placeholder="面料颜色:"></textarea>
            </div>
            <div className="six_middle">
                <textarea className="six_textarea" placeholder="版型及工艺要求说明："></textarea>
            </div>

            <div className="six_right">
                <button className="six_right_button">保 存</button>
            </div>
        </div>
    );
  }
};

// 右上
class PosRightTop extends React.Component {
  render() {
    return (
        <div className="pos_right_top">
            <div className="pos_right_top_style"><img src="images/person_head.jpg" className="pos_right_top_head" /></div>
            <div className="pos_right_top_style pos_right_top_style1">
                <p className="pos_number">001</p>
                <p className="pos_name">至尊宝</p>
            </div>
            <div className="pos_right_top_style"></div>
        </div>
    );
  }
};

// 右侧下部
class PosRightBottom extends React.Component {
  render() {
    return (
        <div className="pos_right_bottom">
            <div className="pos_right_bottom_wrap">
                <div><i className="fa fa-bar-chart-o icon icon_style_right_bottom"></i></div>
                <div><a href="achievement">业绩</a></div>
            </div>
            <div className="pos_right_bottom_wrap">
                <div><i className="fa fa-book icon icon_style_right_bottom"></i></div>
                <div><a href="no_pay">未完成支付</a></div>
            </div>
            <div className="pos_right_bottom_wrap">
                <div><i className="fa fa-refresh icon icon_style_right_bottom"></i></div>
                <div><a href="repair">返修</a></div>
            </div>
        </div>
    );
  }
};

// 支付
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleClick1=this.handleClick1.bind(this);
    }
    handleClick(e){
        $(".pay_way").show();
    }
    handleClick1(e){
        $(".querenShouhuo_wrap").show();
    }
  render() {
    return (
        <div className="pay_wrap">
            <div className="clothing_img_wrap">
                <img src="images/shangyi.jpg" className="clothing_img" />
            </div>
            <div className="pay_button">
                <div className="pay_button_absolute">
                    <button className="sure_product" onClick={this.handleClick1}>确认收货</button>
                    <span className="pay_line">|</span>
                    <button className="pay_product" onClick={this.handleClick}>支 付</button>

                </div>
            </div>
        </div>
    );
  }
};
// 支付方式
class PayWay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleClick1=this.handleClick1.bind(this);
        this.handleClick2=this.handleClick2.bind(this);
    }
    handleClick(e){
        $(".pay_way").hide();
    }
    handleClick1(e){
        $(".cash_wrap").show();
    }
    handleClick2(e){
        var $loadingToast = $('#loadingToast');
            if ($loadingToast.css('display') != 'none') return;

            $loadingToast.fadeIn(100);
            setTimeout(function () {
                $loadingToast.fadeOut(100);
            }, 1000);
        $(".cash_wrap").hide();
        $(".pay_way").hide();
        $(".pay_wrap").hide();
        $(".backgroundOpacitv").hide();
    }
  render() {
    return (
        <div className="pay_way">
            <div className="pay_way_next">
                <div className="pay_way_infor">微信</div>
                <div className="pay_way_infor">支付宝</div>
                <div className="pay_way_infor" onClick={this.handleClick1}>现金</div>
            </div>
            <i className="fa fa-window-close icon pay_way_close"  onClick={this.handleClick}></i>
            <div className="cash_wrap">
                <div className="cash_input_next">
                    <input type="number" placeholder="请输入支付现金金额" className="cash_input" />
                    <span className="cash_input_button"   onClick={this.handleClick2}>提 交</span>
                </div>
            </div>
        </div>
    );
  }
};

// 各种提示信息
class Toast extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
      var style = {display:"none"};
    return (
        <div>
            <div id="loadingToast" style={style}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className="weui-loading weui-icon_toast"></i>
                    <p className="weui-toast__content">支付成功</p>
                </div>
            </div>
            <div id="loadingToast1" style={style}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className="weui-loading weui-icon_toast"></i>
                    <p className="weui-toast__content">收货成功</p>
                </div>
            </div>
        </div>
    );
  }
};
// 各种提示信息
class ShouHuo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleClick1=this.handleClick1.bind(this);
    }
    handleClick(e){
        $(".querenShouhuo_wrap").hide();
    }
    handleClick1(e){
        $(".querenShouhuo_wrap").hide();
        var $loadingToast1 = $('#loadingToast1');
            if ($loadingToast1.css('display') != 'none') return;

            $loadingToast1.fadeIn(100);
            setTimeout(function () {
                $loadingToast1.fadeOut(100);
            }, 1000);
            $(".querenShouhuo_wrap").hide();
            $(".pay_wrap").hide();
            $(".backgroundOpacitv").hide();
    }
  render() {
    return (
        <div className="querenShouhuo_wrap">
            <div className="querenShouhuo_title">是否确认收货？</div>
            <div className="querenShouhuo_button_wrap"><button onClick={this.handleClick}>取消收货</button><button onClick={this.handleClick1}>确认收货</button></div>
        </div>
    );
  }
};
// 返回到页面
ReactDOM.render(
  <Pos/>,
  document.getElementById("pos")
);
