var events = [
	{
		'year':2015,
		'month':'Oct',
		'content': {
			'en':'vChain (internal project) Concept born',
			'zh-tw':'',
			'zh-cn':'vChain（内部项目）概念的诞生'
		}
	},{
		'year':2016,
		'month':'Apr',
		'content': {
			'en':'Release illustration about vChain',
			'zh-tw':'',
			'zh-cn':'发布vChain说明'
		}
	},{
		'year':2016,
		'month':'Nov',
		'content': {
			'en':'Update vChain-compat-openssl.spec',
			'zh-tw':'',
			'zh-cn':'更新vChain-compat-openssl.spec'
		}
	},{
		'year':2017,
		'month':'Feb',
		'content': {
			'en':'Develop vChain explorer',
			'zh-tw':'',
			'zh-cn':'开发vChain浏览器'
		}
	},{
		'year':2017,
		'month':'May',
		'content': {
			'en':'Modify vChain EVM from Ethereum EVM',
			'zh-tw':'',
			'zh-cn':'根据Ethereum EVM修改vChain EVM'
		}
	},{
		'year':2017,
		'month':'June',
		'content': {
			'en':'Decouple oracle module from vChain',
			'zh-tw':'',
			'zh-cn':'从vChain解耦oracle模块'
		}
	},{
		'year':2017,
		'month':'Sep',
		'content': {
			'en':'Release vChain v1.2',
			'zh-tw':'',
			'zh-cn':'发布vChain v1.2'
		}
	},{
		'year':2017,
		'month':'Sep',
		'content': {
			'en':'Concept of PalletOne born',
			'zh-tw':'',
			'zh-cn':'PalletOne概念诞生'
		}
	},{
		'year':2018,
		'month':'3',
		'content': {
			'en':'Release PalletOne White Paper',
			'zh-tw':'正式啟動 Pallet 專案',
			'zh-cn':'发布PalletOne白皮书'
		}
	},{
		'year':2018,
		'month':'5',
		'content': {
			'en':'Release PalletOne Tech Yellow Paper',
			'zh-tw':'',
			'zh-cn':'发布PalletOne技术黄皮书'
			
		}
	},{
		'year':2018,
		'month':'Q2',
		'content': {
			'en':'Start PalletOne Development and Open Source',
			'zh-tw':'',
			'zh-cn':'开始PalletOne开发并开源'
		}
	},{
		'year':2018,
		'month':'Q3',
		'content': {
			'en':'Publish Bitcoin-supported PalletOne Protocol',
			'zh-tw':'',
			'zh-cn':'发布支持比特币的PalletOne协议'
		}
	},{
		'year':2018,
		'month':'Q3',
		'content': {
			'en':'Publish Ethereum-supported PalletOne Protocol',
			'zh-tw':'',
			'zh-cn':'发布支持以太坊网络的PalletOne协议'
		}
	},{
		'year':2018,
		'month':'Q4',
		'content': {
			'en':'PalletOne Test Network online',
			'zh-tw':'釋出 Pallet 規格書',
			'zh-cn':'发布 Pallet 说明书'
		}
	},{
		'year':2019,
		'month':'Q2',
		'content': {
			'en':'PalletOne Test Network online',
			'zh-tw':'',
			'zh-cn':'PalletOne底层测试网络上线'
		}
	},{
		'year':2019,
		'month':'Q2',
		'content': {
			'en':'PalletOne Test Network online',
			'zh-tw':'',
			'zh-cn':'PalletOne系统正式上线'
		}
	},{
		'year':2019,
		'month':'Q3',
		'content': {
			'en':'Connect Pallet to other blockchain',
			'zh-tw':'',
			'zh-cn':'PalletOne将支持更多的区块链'
		}
	}
];

var eventNum = events.length
var lineWidth = 0.3 // sync with index.css!!
var eventSize = 1.4 // sync with index.css!!
var eventMargin = 0.3 // sync with index.css!!

function generateTimeline(){
	var timeline = $('#timeline>.canvas');
	let newElement
	let yCursor = 1

	newElement = $n('div',null,'vline')
	newElement.style.height = '7vw'
	newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
	newElement.style.top = yCursor + 'vw'
	timeline.apnd(newElement)
	yCursor += 7

	events.forEach(function(e,i,a){
		newElement = $n('div',null,'event','hex')
			.apnd($n('div',null,'eventBox',e.emph?'emph':null)
				.apnd((i%2 == 1)?
					$n('div',null,'time')
						.apnd($n('span',null,'month').apnd(e.month))
						.apnd($n('span',null,'year' ).apnd(e.year)):
					$n('div',null,'time')
						.apnd($n('span',null,'year' ).apnd(e.year))
						.apnd($n('span',null,'month').apnd(e.month))
				).apnd($n('div',null,'content')
					.apnd($n('span').apnd(e.content[lang]))
				)
			)
		newElement.style.top = yCursor + 'vw'
		newElement.style.left = 'calc(50% - ' + (eventSize*0.57735 + eventMargin) + 'vw)'

		let innerElement
		innerElement = $n('div','','left')
		innerElement.style.borderTopWidth    = eventSize*0.500 + 'vw'
		innerElement.style.borderBottomWidth = eventSize*0.500 + 'vw'
		innerElement.style.borderRightWidth  = eventSize*0.289 + 'vw'
		newElement.apnd(innerElement)

		innerElement = $n('div','','mid')
		newElement.apnd(innerElement)

		innerElement = $n('div','','right')
		innerElement.style.borderTopWidth    = eventSize*0.500 + 'vw'
		innerElement.style.borderBottomWidth = eventSize*0.500 + 'vw'
		innerElement.style.borderLeftWidth   = eventSize*0.289 + 'vw'
		newElement.apnd(innerElement)

		timeline.apnd(newElement)
		yCursor += eventSize + 2*eventMargin

		newElement = $n('div',null,'vline')
		newElement.style.width = lineWidth+'vw'
		newElement.style.height = '2.5vw'
		newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
		newElement.style.top = yCursor + 'vw'
		timeline.apnd(newElement)
		yCursor += 2.5
	})

	for(let i=0;i<3;i++){
		yCursor += .5
		newElement = $n('div',null,'vline')
		newElement.style.width = lineWidth+'vw'
		newElement.style.height = '.5vw'
		newElement.style.left = 'calc(50% - ' + (lineWidth/2) + 'vw)'
		newElement.style.top = yCursor + 'vw'
		timeline.apnd(newElement)
		yCursor += .5
	}

	$('#timeline').style.height = (yCursor+20) + 'vw'
}
