import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
			var title = this.props.data.title
			var isPrizes = this.props.isPrizes
      var objects = this.props.data.objects.map(function(objects){
        var objectImage = 'images/portfolio/'+objects.image;
        return <div key={objects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={objects.url} title={objects.title}>
							<div style={{
								alignSelf: 'center',
								justifyContent: 'center',
								alignItems: 'center',
								alignContent: 'center'
							}}>
							 <img
							 	style={{
									height: 200,
									width: '100%',
									objectFit:isPrizes ? 'cover' : 'cover',
									backgroundColor: '#ebeeee',
									borderRadius: 20,
									padding:10
								 }}
								 alt={objects.title} src={objectImage} />
							</div>
               {/* <div className="overlay">
                  <div className="prizes-item-meta">
                 <h5>{objects.title}</h5>
                     <p>{objects.category}</p>
                  </div>
                </div> */}
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="prizes">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>{title}</h1>
							<div id="prizes-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
									{objects}
							</div>
						</div>
				</div>
   		</section>
    );
  }
}

export default Portfolio;
