import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "../dashboard/dashboard.css";
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
      title:"",
      addToCart : [],
      AddToCardTitle: null,
      AddToCardAuthor:null,
      AddToCardImageURL:null,
      Count:0

    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  wishListClick(event) {
  }
  async handleButtonClick (event) {
    console.log("in handle Button click");
    this.setState({Count : this.state.Count + 1})
    await this.setState({
       AddToCardTitle:this.props.value.TITLE,
       AddToCardAuthor:this.props.value.AUTHOR,   
       AddToCardImageURL:this.props.value.IMAGEURL,
    });
    var addToCartBook = {
      Title: this.props.value.TITLE,
      Author:this.props.value.AUTHOR,
      ImageURL:this.props.value.IMAGEURL,
      Price : this.props.value.PRICE,
      Count : this.state.Count
    }
    this.props.getBook(addToCartBook)
  }
  AddtoBag() {
    // this.props.history.push('/addToCart')
  }
  AddWishList() {
    this.setState({ a:this.props.value.TITLE  });
  }
  render() {
    console.log("indashBoard",this.state.Count);
    
    return (
      <div>
        <Card
          style={{
            maxWidth: 180,
            height: 270,
            marginLeft: 80,
            marginTop: 20,
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
        >
          <CardActionArea>
            <Tooltip title={this.props.value.DESCRIPTION} arrow>
              <div className="xyz">
                <img
                  className="imagePath"
                  src={this.props.value.IMAGEURL}
                  style={{
                    height: "150px",
                    width: "70%",
                    marginTop: "6%",
                    marginLeft: "15%"
                  }}
                  alt="no Cover"
                />
              </div>
            </Tooltip>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  marginTop: -10,
                  fontSize: 10,
                  marginLeft: 10,
                }}
              >
                {this.props.value.TITLE}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "grey",
                  marginTop: -30,
                  fontSize: 10,
                  marginLeft: 10
                }}
              >
                {this.props.value.AUTHOR}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: 10,
                  marginLeft: 10,
                  marginTop: -45
                }}
              >
                {this.props.value.PRICE}
              </Typography>
              {/* <div style = {{
                display: "flex",
                flex: "row",
                justif: "center",
                width: "100%",
                color: "white"
            }}>
                  {(this.props.value.NOOFCOUNT == 0)
                  ? <outOfStock></outOfStock>
                  :<OutOfStck/>
                  }
            </div> */}
            </CardContent>
          </CardActionArea>
          <CardActions className="bookdiv">
            <div className="button1">
              <Button
                onClick={this.handleButtonClick}
                className={this.state.button ? "buttonTrue" : "buttonFalse"}
                style={{
                  border: "none",
                  backgroundColor: "#800000",
                  color: "white",
                  textDecoration: "none",
                  display: "inlineBlock",
                  transitionDuration: 0.4,
                  marginTop: -70,
                  marginTop: -70,
                  width: 80,
                  height: 30,
                  fontSize: "0.60em"
                }}
              >
                Add to Bag
              </Button>
            </div>
            <div className="button2" onClick={this.AddWishList}>
              <Button
                style={{
                  borderStyle: "solid",
                  borderWidth: "thin",
                  width: 70,
                  height: 30,
                  marginTop: -70,
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: "0.60em"
                }}
              >
                Wishlist
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default dashboard;
