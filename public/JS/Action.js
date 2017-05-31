const formConsulta = document.querySelector('#enviar')
	//const formDate = new FormData(formConsulta)

	formConsulta.addEventListener('submit', event => {
		var cadena = document.getElementById("libroX").value
		if(cadena == null){
		}else{
			var ruta = "/api/libro/"+cadena
			event.preventDefault()
			//const myHeaders = new Headers()
			//myHeaders.append('authorization', `Bearer ${ localStorage.token}`)
			fetch(ruta)  
				.then(  
			    	function(response) {  
			      		if (response.status !== 200) {  
			        		console.log('Looks like there was a problem. Status Code: ' +  
			    			response.status) 
			        		return
			      		}
			      		// Examine the text in the response  
			      		response.json().then(function(data) {  
			        		//console.log(data)
				        	//var context = JSON.stringify(data)
				        	//console.log(context)
							data.libro.map(libr => {
								let tbl = document.createElement('table')
							    tbl.className = "table table-bordered"
							    //tbl.style.width = '100%'
							    //tbl.style.textAlign = 'justify'
							    //tbl.style.tableLayout = 'fixed'
							    //tbl.setAttribute('border', '1')
							    let tbdy = document.createElement('tbody')
							    let tr = document.createElement('tr')
							    let td = document.createElement('th')
							    td.appendChild(document.createTextNode(libr.titulo))
								let td2 = document.createElement('th')
							    td2.appendChild(document.createTextNode(libr.autor))
							    let td3 = document.createElement('th')
							    td3.appendChild(document.createTextNode(libr.clasificacion))
							    tr.appendChild(td)
							    tr.appendChild(td2)
							    tr.appendChild(td3)
							    tbdy.appendChild(tr)
							    tbl.appendChild(tbdy)
							    document.body.appendChild(tbl)
				        	})
			      		})
			    	}  
			  	)  
			  	.catch(function(err) {  
			    	console.log('Fetch Error :-S', err)  
			  	})		
		}
	})