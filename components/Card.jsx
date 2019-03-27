import React, { Component } from "react";

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = {
			active: this.props.active
		}
	}

	changeElementState = () => {
		if(this.props.active != 'disabled') {
			this.setState(prevState => ({
				active: !prevState.active
			}));
		}		
	}

	changeProductClassName = () => {
		let className = [];
		if (this.state.active === 'disabled') {
			className.push('product product--disabled');
			return className;
		}
		if (!this.state.active) {
			className = 'product';
			return className;
		}
		if (this.state.active) {
			className = 'product product--active';
			return className;
		}		
	}

	render() {
		console.log(this.state.active)
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
				    -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
				    -ms-align-items: center;align-items: center;			  	
				  	max-width: 320px;
				  	width: 100%;
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
		            background: linear-gradient(135deg, transparent 30px, rgb(22, 152, 217) 0);
		            box-sizing: border-box;
		            -webkit-clip-path: polygon(0 100%, 0 8.5%, 13% 0, 100% 0, 100% 100%);
					clip-path: polygon(0 100%, 0 8.5%, 13% 0, 100% 0, 100% 100%);
					transition: .3s ease-out;
					overflow: hidden;
					user-select: none;
					cursor: pointer;            
				  }
				  .product:hover:not(.product--disabled):after {
				  	opacity: 1;
				  }
				  .product:hover:not(.product--disabled) .product__weight {
				  	background-color: rgb(46, 168, 230);
				  }				  
				  .product--active {
				  	background: linear-gradient(135deg, transparent 30px, rgb(217, 22, 103) 0);				  	
				  }
				  .product:after,
				  .product--active:after {					
					content: '';
					position: absolute;					
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transition: .3s ease-out;
					opacity: 0;					
					z-index: 2;
				  }
				  .product:after {
				  	background: linear-gradient(135deg, transparent 30px, rgb(46, 168, 230) 0);
				  }
				  .product--active:after {
				  	background: linear-gradient(135deg, transparent 30px, rgb(230, 46, 122) 0);
				  }
				  .product--active .product__weight {
				  	background-color: rgb(217, 22, 103);
				  }
				  .product--active:hover:after {
				  	opacity: 1;
				  }
				  .product.product--active:hover:not(.product--disabled) .product__weight {
				  	background-color: rgb(230, 46, 122);
				  }	  
				  .product--disabled {
				  	background: linear-gradient(135deg, transparent 30px, rgb(179, 179, 179) 0);
				  	cursor: default;
				  }
				  .product--disabled .product__weight {
				  	background-color: rgb(179, 179, 179);
				  }
				  .product--disabled + .product__appeal {
					color: rgb(255, 255, 102)
				  }
				  .product--disabled:before {
				  	content: '';
				  	position: absolute;
				  	top: 0;
				  	right: 0;
				  	bottom: 0;
				  	left: 0;
				  	background-color: rgba(242, 242, 242, 0.4);
				  	z-index: 4;
				  }
		          .product__card {
		          	position: relative;
		          	display: flex;
		          	flex-direction: column;
		            width: calc(100% - 8px);
		            height: calc(480px - 8px);
		            border-radius: 8px;
		            background: linear-gradient(135deg, transparent 28.5px, #fff 0);
		            box-sizing: border-box;
		            overflow: hidden;
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
		          	font-family: "TrebuchetMS Bold";
		          	font-size: 48px;	
					color: rgb(0, 0, 0);
					font-weight: bold;
		          }
		          .product__stuffing {
		          	font-family: "TrebuchetMS Bold";
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
		          	margin-top: 33px;
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
					<div
						className={this.changeProductClassName()}						
						onClick={this.changeElementState}
					>
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
			</React.Fragment>
		)		
	}
}


export default Card;
