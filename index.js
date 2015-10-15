import http from 'http'

class _ss {
	constructor(){
		this.middlewares = []
	}
	use(m){
		this.middlewares.push(m)
	}
	listen(port){
		let server = http.createServer(async function(req,res){
				for(let i = 0, l = this.middlewares.length; i < l; i++){
					[req,res] = await this.middlewares[i](req,res)
				}
		}.bind(this))
		server.listen(port)
	}
}

function Starship() {
  return new _ss
}

let app = Starship()

app.use(async function(req,res){
	res.setHeader("dep", "msg");
	return Promise.resolve([req,res])
})

app.use(async function(req,res){
	res.end('nihaoshijie233')
})

app.listen(8080)

