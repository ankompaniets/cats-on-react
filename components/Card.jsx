import React, { Component } from "react";

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = {
			active: this.props.active
		}
	}

	changeElementState = (e) => {
		if(this.props.active != 'disabled') {
			this.setState(prevState => ({
				active: !prevState.active
			}));
			
		}		
	}

	addClassOnMouseHover = (e) => {
		let card = e.target.closest('.product');
		
		if(!card.classList.contains('product--disabled')) {
			card.classList.add("hovered");
		}
	}

	removeClassOnMouseLeave = (e) => {
		let card = e.target.closest('.product');

		if(!card.classList.contains('product--disabled')) {
			card.classList.remove("hovered");
		}		
	}

	changeProductClassName = () => {
		let className = [];

		if (this.state.active === 'disabled') {
			className.push('product product--disabled');
			return className;
		}
		if (!this.state.active) {
			className.push('product');
			return className;
		}
		if (this.state.active) {
			className.push('product product--active');
			return className;
		}		
	}

	render() {
		const {active} = this.state;
		const {
			productName,
			productDescription,
			productGift,
			productPortions,
			productStuffing,
			productWeight,
			feedDescription,
			approbation
		} = this.props;

		return (
			
			<React.Fragment>
				<style jsx>{`
				  .product__wrapper {
				    display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
				    justify-content: center;		    			  	
				  	max-width: 320px;
				  	width: 100%;
				  }
				  .product__inner {
				  	position: relative;
				  	display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
				    -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
				    -ms-align-items: center;align-items: center;
				  	max-width: 320px;
				  	width: 100%;
				  }
				  .product__inner:after {
				  	content: '';
				  	position: absolute;
				  	left: 20px;
				  	top: -46px;
				  	width: 30px;
				  	height: 65px;
				  	background-color: transparent;
				  	transform: translate(-24px, 24px) rotate(45deg);
				  	z-index: 10;
				  }		  
				  .product {
				  	position: relative;
				  	display: flex;
				  	justify-content: center;
				  	align-items: center;
				  	width: 100%;
				  	max-width: 320px;		            
		            height: 480px;
		            border-radius: 13px;
		            box-sizing: border-box;
					overflow: hidden;
					user-select: none;
					cursor: pointer;            
				  }
				  .product__mask {
				  	position: absolute;
				  	top: 0;
				  	right: 0;
				  	bottom: 0;
				  	left: 0;
				  	z-index: 5;			  	
				  }
				  .product__mask path {
				  	transition: .3s ease-out;
				  }
				  .product.hovered .product__mask path {
				  	stroke: rgb(46, 168, 230);
				  }
				  .product.hovered .product__weight {
				  	background-color: rgb(46, 168, 230);
				  }				  
				  .product--active .product__mask path {
				  	stroke: rgb(217, 22, 103);				  	
				  }
				  .product--active .product__weight {
				  	background-color: rgb(217, 22, 103);
				  }
				  .product--active.hovered .product__mask path{
				  	stroke: rgb(230, 46, 122);
				  }
				  .product--active.hovered .product__weight {
				  	background-color: rgb(230, 46, 122);
				  }				  
				  .product--disabled {
				  	cursor: default;
				  }
				  .product--disabled .product__mask path {
				  	stroke: rgb(179, 179, 179);
				  	fill: rgba(242, 242, 242, 0.4);
				  }
				  .product--disabled .product__weight {
				  	background-color: rgb(179, 179, 179);
				  }
				  .product--disabled + .product__appeal {
					color: rgb(255, 255, 102)
				  }
		          .product__card {
		          	position: relative;
		          	display: flex;
		          	flex-direction: column;
		          	justify-content: space-between;
		            width: calc(100% - 8px);
		            height: calc(480px - 8px);
		            border-radius: 8px;
		            background: linear-gradient(135deg, transparent 28px, #fff 0);
		            box-sizing: border-box;
		            z-index: 3;
		          }
		          .product__info {
		          	padding: 18px 20px 0 44px;
		          }
		          .product__description {
		          	color: rgb(102, 102, 102);
		          }
		          .product__name {
		          	padding: 6px 0 0 0;
		          	font-family: 'TrebuchetMS Bold', arial;
		          	font-size: 48px;	
					color: rgb(0, 0, 0);
					font-weight: bold;
		          }
		          .product__stuffing {
		          	font-family: 'TrebuchetMS Bold', arial;
		          	font-size: 24px;					
					color: rgb(0, 0, 0);
					font-weight: bold;
		          }
		          .product__compos {
		          	padding-top: 14px;
		          	font-size: 14px;
					color: rgb(102, 102, 102);
					font-weight: bold;
		          }
		          .product-img {
		          	position: relative;
		          	height: 100%;
		          	max-height: 269px;
		          }
		          .product-img img {
		          	position: absolute;
		          	left: -28px;
		          }
		          .product__weight {
		          	position: absolute;
		          	display: flex;
		          	flex-direction: column;
		          	justify-content: flex-start;
		          	right: 12px;
		          	bottom: 12px;
		          	width: 80px;
					height: 80px;
		          	border-radius: 50%;
					background-color: rgb(22, 152, 217);					
					color: rgb(255, 255, 255);
					text-align: center;
					transition: .3s ease-out;
		          }
		          .product__weight-number {
		          	padding: 7px 0 0 0px;
		          	font-size: 42px;
		          }
		          .product__weight-unit {
		          	font-size: 20px;
		          	line-height: 0.6;
		          }
		          .product__appeal {
		          	margin-left: -7px;
		          	margin-top: 15px;
		          	font-size: 13px;
		          	text-align: center;
		          	color: #fff;
		          }
		          .product__appeal-button {
		          	padding: 0;
		          	border: none;
		          	background: none;
		          	text-decoration: underline;
		          	text-decoration-style: dashed;
		          	text-decoration-color: rgb(22, 152, 217);		          	
		          	color: rgb(22, 152, 217);
		          	cursor: pointer;
		          	outline: none;
		          }
		          @media (max-width: 1168px) {
		            .product__wrapper:first-child {
		              max-width: 100%;              
		            }
		            .product__wrapper:nth-child(2),
		            .product__wrapper:nth-child(3) {
		              margin-top: 20px;             
		            }
		          }		          
		          `}</style>

				<div className="product__wrapper">
					<div className="product__inner">				
						<div
							className={this.changeProductClassName()}						
							onClick={this.changeElementState}
							onMouseEnter={this.addClassOnMouseHover}
							onMouseLeave={this.removeClassOnMouseLeave}
						>
						<svg className="product__mask" width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 467V43.1599L43.789 2H307C313.075 2 318 6.92487 318 13V467C318 473.075 313.075 478 307 478H13C6.92486 478 2 473.075 2 467Z" fill="none" stroke="#3399CC" strokeWidth="4"/>
						</svg>
				        	<div className="product__card">
					        	<div className="product__info">
						        	<div className="product__description">{productDescription}</div>
									<div className="product__name">{productName}</div>
									<div className="product__stuffing">{productStuffing}</div>
									<div className="product__compos">
										<div className="product__compos-portions">
											{
												productPortions == 1 &&
													`${productPortions} порция`
											}
											{
												productPortions >= 2 && productPortions <= 4 &&
													`${productPortions} порции`
											}
											{
												productPortions >= 5 &&
													`${productPortions} порций`
											}
										</div>
										<div className="product__compos-gift">
											{
												productGift == 1 &&
													`мышь в подарок`
											}
											{
												productGift >= 2 && productGift <= 4 &&
													`${productGift} мыши в подарок`
											}
											{
												productGift >= 5 &&
													`${productGift} мышей в подарок`
											}
										</div>
										{
											approbation &&
											<React.Fragment>
												<div className="product__compos-approbation">{approbation}</div>
											</React.Fragment>
										}
									</div>
					        	</div>					
								<div className="product-img">
									<img src="static/images/Photo.png" alt="product_img"/>
								</div>					
								<div className="product__weight">
									<div className="product__weight-number">{productWeight}</div>
									<div className="product__weight-unit">кг</div>
								</div>
							</div>						
				        </div>
				        <div className="product__appeal">
				        	
				        	{!active &&
				        		<React.Fragment>
					        		<span>Чего сидишь? Порадуй котэ, </span> 
					        		<button className="product__appeal-button" onClick={this.changeElementState}>купи</button>
				        		</React.Fragment>
				        	}
				        	{active === true &&
								feedDescription
				        	}
				        	{active === 'disabled' &&
								`Печалька, ${productStuffing} закончился`
				        	}
				        </div>
			        </div>
				</div>		        
			</React.Fragment>
		)		
	}
}


export default Card;
