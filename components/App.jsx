import React, { Component } from "react";
import Card from './Card';

class App extends Component {  

  constructor(props) {
    super(props);

    this.state = {   
    };
  }

  render() {
    return (
      <React.Fragment>
        <style jsx>{`
          .products {
            display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
            -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
            justify-content: center;
            -ms-align-items: center;align-items: center;
            min-height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(static/images/bg.jpg);
          }
          .products__title {
            font-family: 'Exo2.0 Thin';
            font-size: 36px;
            text-align: center;
            color: #fff;
          }
          .products__container {
            display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
            justify-content: space-between;
            max-width: 1120px;
            width: 100%;
            margin-top: 23px;
          }
          @media (max-width: 1168px) {
            .products {
              padding: 30px 0;
            }
            .products__container {
              justify-content: space-around;
              flex-wrap: wrap;            
            }
          }
          @media (max-width: 768px) {
            .products__container {
              -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
              -ms-align-items: center;align-items: center;          
            }
          }
          @media (max-width: 480px) {
            .products {
              padding: 30px 10px;
            } 
          }
          `}</style>
        <div className="products">
          <div className="products__title">Ты сегодня покормил кота?</div>
          <div className="products__container">            
            <Card
              productName="Нямушка"
              productDescription="Сказочное заморское явство"
              productStuffing="с фуа-гра"
              productPortions="10"
              productGift="1"
              productWeight="0,5"
              feedDescription="Печень утки разварная с артишоками."
              approbation={false}             
            />
            <Card
              productName="Нямушка"
              productDescription="Сказочное заморское явство"
              productStuffing="с рыбой"
              productPortions="40"
              productGift="2"
              productWeight="2"
              feedDescription="Головы щучьи с чесноком да свежайшая сёмгушка."
              active={true}
              approbation={false} 
            />
            <Card
              productName="Нямушка"
              productDescription="Сказочное заморское явство"
              productStuffing="с курой"
              productPortions="100"
              productGift="5"
              productWeight="5"
              feedDescription="Филе из цыплят с трюфелями в бульоне."
              active="disabled"
              approbation="заказчик доволен"
            />
          </div>          
        </div>
      </React.Fragment>
    );
  }
}

export default App;