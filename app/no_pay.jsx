
// 框架
class NoPay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabthitems:[],tabtritems:[]};
    }
    componentDidMount() {
        getTableData(function(data) {
            this.setState(data);
        }.bind(this));
    }

    render() {
        return (
            <div className="pos_wrap">
                <Table tabthitems={this.state.tabthitems} tabtritems={this.state.tabtritems} />
            </div>
        );
    }
};
// 表格
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabtritems:this.props.tabtritems};
    }
    componentDidMount(){
        var height = $(window).height() - 114;
        console.log(height);
        $("#tableAuto").css({"height":height,"overflow":"auto"});
    }
    render() {
        return (
          <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="span12">
                            <div className="widget-box">
                                <div className="widget-title overflow_hidden">
                                    <span className="icon">
                                        <i className="icon-th"></i>
                                    </span>
                                    <h5>未支付列表</h5>
                                </div>
                                <div className="widget-content nopadding" id="tableAuto">
                                    <table className="table table-bordered table-striped table-hover">
                                      <thead>
                                        <tr>
                                        {this.props.tabthitems.map((item,index) => (
                                            <Th  key={index}  item={item} sort={this.props.sort} onSort={this.props.onSort} />))
                                        }
                                      </tr>
                                      </thead>
                                      <tbody>
                                        {this.props.tabtritems.map((item,index )=> (
                                            <Tr  key={index}  item={item} tabthitems={this.props.tabthitems} />))
                                        }
                                      </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

class Tr extends React.Component {
    render() {
        return (

            <tr>
            {this.props.tabthitems.map((item,index) => (
                <Td  key={index}  item={this.props.item} thitem={item}  />))
            }
            </tr>

        );
    }
};
class Th extends React.Component {
    render() {
        return (
            <th>{this.props.item.title}</th>
        );
    }
};
class Td extends React.Component {
    render() {
        if (this.props.thitem.type == "operation") {

          return (<td>
              <button type="button" className="btn btn-primary btn-mini"><a href={"index?product_id="+this.props.item.id}>支付</a></button>
              </td>);
        } else {
            return (<td>{this.props.item[this.props.thitem.name]}</td>);
        }
    }
};
// 返回到页面
ReactDOM.render(
  <NoPay/>,
  document.getElementById("no_pay")
);
