	var shadow = '';
	var base_url = window.location.origin;
	var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
	var img = document.createElement('img');
  	img.src = deleteIcon;
  	var cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A";
  	var cloneImg = document.createElement('img');
  	cloneImg.src = cloneIcon;
  	var rotateIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDZ2M2w0LTQtNC00djNjLTQuNDIgMC04IDMuNTgtOCA4IDAgMS41Ny40NiAzLjAzIDEuMjQgNC4yNkw2LjcgMTQuOGMtLjQ1LS44My0uNy0xLjc5LS43LTIuOCAwLTMuMzEgMi42OS02IDYtNnptNi43NiAxLjc0TDE3LjMgOS4yYy40NC44NC43IDEuNzkuNyAyLjggMCAzLjMxLTIuNjkgNi02IDZ2LTNsLTQgNCA0IDR2LTNjNC40MiAwIDgtMy41OCA4LTggMC0xLjU3LS40Ni0zLjAzLTEuMjQtNC4yNnoiLz48L3N2Zz4=";
	var rotateImg = document.createElement('img');
	rotateImg.src = rotateIcon;
	$('[data-toggle="tooltip"]').tooltip()

	var canvas,
	canvasOriginalWidth = 521,
	canvasOriginalHeight = 680,
	canvasWidth = 521,
	canvasHeight = 680,
	imgWidth,
	imgHeight,
	bgImage,
	canvasScale = 1,
	photoUrlLandscape = 'https://images8.alphacoders.com/292/292379.jpg',
	photoUrlPortrait = base_url+'/static/sloper/images/demo/product_template.png';
	// canvas = window._canvas = new fabric.Canvas('megadolls');
	canvas = this.__canvas = new fabric.Canvas('megadolls');
	canvas.statefullCache = true;
  	// var ctx = canvas.getContext("2d");
  	init();
  	var canvas2  = this._canvas = new fabric.Canvas('megadolls_preview');

  	// console.log(base_url);
	// $(document).ready(function () {
	// 	// addDrawingModeBrush();
	// 	setCanvasZoom();
	// 	setCanvasSize({ height: canvasHeight, width: canvasWidth });
	// 	setCanvasBackgroundImageUrl(photoUrlPortrait, 0, 0, 1)
	// });
	
	function setCanvasSize(canvasSizeObject) 
	{
		canvas.setWidth(canvasSizeObject.width);
		canvas.setHeight(canvasSizeObject.height);
	}
  
	function setCanvasZoom() 
	{
		canvasWidth = canvasOriginalWidth * canvasScale;
		canvasHeight = canvasOriginalHeight * canvasScale;

		canvas.setWidth(canvasWidth);
		canvas.setHeight(canvasHeight);
	}

	function setCanvasBackgroundImageUrl(url) 
	{
		if (url && url.length > 0) {
			fabric.Image.fromURL(url, function (img) {
				bgImage = img;
				scaleAndPositionImage(url);
			});
		} else {
			canvas.backgroundImage = 0;
			canvas.setBackgroundImage('', canvas.renderAll.bind(canvas));

			canvas.renderAll();
		}
		// canvas.globalCompositeOperation="source-over";
	}

	function scaleAndPositionImage(url11)
	{
		setCanvasZoom();
		var canvasAspect = canvasWidth / canvasHeight;
		var imgAspect = bgImage.width / bgImage.height;
		var left, top, scaleFactor;

		if (canvasAspect >= imgAspect) {
			var scaleFactor = canvasWidth / bgImage.width;
			left = 0;
			top = -((bgImage.height * scaleFactor) - canvasHeight) / 2;
		} else {
			var scaleFactor = canvasHeight / bgImage.height;
			top = 0;
			left = -((bgImage.width * scaleFactor) - canvasWidth) / 2;
		}

		canvas.setBackgroundImage(bgImage, canvas.renderAll.bind(canvas), {
			top: top,
			left: left,
			originX: 'left',
			originY: 'top',
			scaleX: scaleFactor,
			scaleY: scaleFactor

		});


		canvas.renderAll();		
	}

	// switch Template
	function removeTemplate(e) {
		importExportCanvas();
    	$('.jsImgTemplate > .check-shape').css('display','none');
		// $(".canvasOverBox").css("background-image", "");
		// $(".canvasOverBox1").css("background-image", "");
		$('.jsImgTemplate').attr("onclick","addTemplate(this)");
		let imageUrl = e.querySelector('img').src
		fabric.Image.fromURL(imageUrl,
			function (img) {
			  canvas.remove(img)
			  canvas.renderAll();
  
			  //for preview
			  canvas2.remove(img)
			  canvas2.renderAll();

		  }
	  );
	}

	function addTemplate(e)
    {
		removeTemplate(e)
		$(e).children('div').css('display','flex');
		let imageUrl = e.querySelector('img').src
		// $(".canvasOverBox").css("background-image", "url(" + imageUrl + ")");
		// $(".canvasOverBox1").css("background-image", "url(" + imageUrl + ")");
		// canvas.setBackgroundImage(imageUrl)
		// canvas.renderAll();
		$(e).attr("onclick","removeTemplate(this)");

		fabric.Image.fromURL(imageUrl,
      	function (img) {
			img.set("erasable", false);
			img.scaleToWidth(531);
			canvas.setBackgroundImage(img);
			canvas.renderAll();

			//for preview
			img.scaleToWidth(531);
			canvas2.setBackgroundImage(img);
			canvas2.renderAll();

		});

		importExportCanvas()
    }

    // Switch Texture 
	function removeTexture()
	{
		// changes by dishank
		importExportCanvas();
    	$('.jsImgTexture > .check-shape').css('display','none');
    	$('#zoom_range').css('display','none');
		$(".canvasOverBox").css("background-image", "");
		$(".canvasOverBox1").css("background-image", "");
		$('.jsImgTexture').attr("onclick","Addtexture(this)");
		// changes by dishank end

		// importExportCanvas();
    	// $('#textureFunction').children('div').css('display','none');
    	// $('#zoom_range').css('display','none');
		// $(".canvasOverBox").css("background-image", "");
		// $(".canvasOverBox1").css("background-image", "");
		// $("#textureFunction").attr("onclick","Addtexture(this)");
	}

    function Addtexture(e)
    {
		// changes by dishank
		removeTexture()
		$(e).children('div').css('display','flex');
    	$('#zoom_range').css('display','block');

		var imageUrl = e.querySelector('img').src
		$(".canvasOverBox").css("background-image", "url(" + imageUrl + ")");
		$(".canvasOverBox1").css("background-image", "url(" + imageUrl + ")");
		$(e).attr("onclick","removeTexture()");

		removeDressColor();
		importExportCanvas()
		// changes by dishank end

    	// $('#textureFunction').children('div').css('display','flex');
    	// $('#zoom_range').css('display','block');
		// var imageUrl = base_url+"/static/sloper/images/demo/megadolls-demo-6.png";

		// $(".canvasOverBox").css("background-image", "url(" + imageUrl + ")");
		// $(".canvasOverBox1").css("background-image", "url(" + imageUrl + ")");
		// $("#textureFunction").attr("onclick","removeTexture(this)");
		// removeDressColor();
		// importExportCanvas()
    }

	var setType = 'brush';
    function addDrawingModeBrush()
    {
    	$('#line_color').text('Brush Color');
    	$('#line_width').text('Brush Width');
    	$('.upper-canvas').attr('id','brush_id');

    	setType = 'brush';
    	if(parseInt($('#linewidth').val())>0)
		{
			var wdt = parseInt($('#linewidth').val());
		}
		else
		{
			var wdt = 1;
		}
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
       	canvas.freeDrawingBrush.width = wdt+3;
		canvas.freeDrawingBrush.color = ($('#linecolor').val());
		// canvas.freeDrawingCursor = 'none'; 
        canvas.isDrawingMode = true;
  //       canvas.on('mouse:up', function() {
		//   canvas.getObjects().forEach(o => {
		//     o.fill = 'blue'
		//   });
		//   canvas.renderAll();
		// });
        showAllTools();
    	$('.upper-canvas').css('cursor',`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3e%3cg transform='rotate(45 256 256)'%3e%3crect id='r' x='16' y='216' width='480' height='80' rx='14'/%3e%3cuse href='%23r' transform='rotate(90 256 256)'/%3e%3c/g%3e%3c/svg%3e") 16 16, pointer !important;`);
    }

	function addDrawingModePencil()
	{
		setType = 'pencil';
		$('#line_color').text('Pencil Color');
    	$('#line_width').text('Pencil Width');
    	$('.upper-canvas').attr('id','pencil_id');
		// ctx.globalCompositeOperation="source-over";
		canvas.isDrawingMode= true;
		if(parseInt($('#linewidth').val())>0)
		{
			var wdt = parseInt($('#linewidth').val());
		}
		else
		{
			var wdt = 1;
		}
		canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
		canvas.freeDrawingBrush.width = wdt>5?wdt=5+wdt/10:wdt;
		canvas.freeDrawingBrush.color = ($('#linecolor').val());
		showAllTools();
	}

	function addDrawingModeEraser()
	{
		setType = 'eras';
    	$('#line_width').text('Eraser Width');
    	$('.upper-canvas').attr('id','eraser_id');
		canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
		if(parseInt($('#linewidth').val())>0)
		{
			var wdt = parseInt($('#linewidth').val());
		}
		else
		{
			var wdt = 1;
		}
        canvas.freeDrawingBrush.width = wdt;
        canvas.isDrawingMode = true;
		// canvas.isDrawingMode = true;
		// canvas.freeDrawingBrush.width = parseInt($('#linewidth').val());
		// canvas.freeDrawingBrush.color = '#fafafa';

		hideLineColorTool();
		showLineWidthTool();
	}

	function clearDrawingMode()
	{
		$('.upper-canvas').attr('id','hide_id');
		addIcon();
		canvas.isDrawingMode = false;
		// canvas.getObjects().forEach(o => {
		//     o.fill = 'blue'
		//   });
  //   	canvas.renderAll();
		hideAllTools();
	}
	
	function changeColor(color)
	{
		canvas.freeDrawingBrush.color = color;
	}
	function changeWidth(width)
	{
		// console.log(width);
		// prevetDefault();
		if(parseInt(width)>0)
		{
			var wdt = parseInt(width);
		}
		else
		{
			var wdt = 1;
		}
		if(setType =='brush')
		{
			canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
			canvas.freeDrawingBrush.width = wdt+3 ;
		}
		else if(setType =='pencil')
		{
			canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
			canvas.freeDrawingBrush.width = wdt>5?wdt=5+wdt/10:wdt;
		}
		else
		{
			canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
			canvas.freeDrawingBrush.width = wdt*2;
		}
		canvas.freeDrawingBrush.color = $('#linecolor').val();
		
		
	}
    function addIcon(url11,id)
    {
        var imgWidth = $('#'+id).width(); 
        var imgHeight = $('#'+id).height(); 
        fabric.Image.fromURL(url11, function(myImg)
        {
            //i create an extra var for to change some image properties
            shadow = myImg.set({
                top: 100,
                left: 100,
            });
            if(imgWidth > imgHeight)
            {
                shadow.scaleToWidth(50);
            }
            else
            {
                shadow.scaleToHeight(50);   
            }
        	myImg.set("erasable", false);
        	fabric.Object.prototype.controls.mtr = new fabric.Control({
			    x: 0,
			    y: -0.5,
			    cursorStyle: 'pointer',
			    actionHandler: fabric.controlsUtils.rotationWithSnapping,
    			cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
			    render: renderIcon2,
			    cornerSize: 24,
			    offsetY: -40,
			  });
            canvas.add(shadow);
        });
        importExportCanvas();
    }
    function deleteObject(eventData, transform)
    {
		var target = transform.target;
		var canvas = target.canvas;
		    canvas.remove(target);
        canvas.requestRenderAll();
	}
	function cloneObject(eventData, transform)
	{
	    var target = transform.target;
	    var canvas = target.canvas;
	    target.clone(function(cloned) {
	      cloned.left += 10;
	      cloned.top += 10;
	      canvas.add(cloned);
	    });

  	}
  	function rotateObject(eventData, transform)
	{
	    var target = transform.target;
	    var canvas = target.canvas;
	    target.clone(function(cloned) {
	      cloned.left += 10;
	      cloned.top += 10;
	      canvas.add(cloned);
	    });
  	}


    function getPerportionSize(maxWidth,maxHeight,width,height)
    {
      //  var maxWidth = 100; // Max width for the image
       // var maxHeight = 100;    // Max height for the image
        var ratio = 0;  // Used for aspect ratio
       // var width = $(this).width();    // Current image width
        //var height = $(this).height();  // Current image height

        // Check if the current width is larger than the max
        if(width > maxWidth)
        {
            ratio = maxWidth / width;   // get ratio for scaling image
            $(this).css("width", maxWidth); // Set new width
            $(this).css("height", height * ratio);  // Scale height based on ratio
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        // There's no built-in eraser in Fabric and implementing is a bit difficult.
        if(height > maxHeight)
        {
            ratio = maxHeight / height; // get ratio for scaling image
            $(this).css("height", maxHeight);   // Set new height
            $(this).css("width", width * ratio);    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
        var returnArra  = []; 
        returnArra['width'] = width;
        returnArra['height'] = height;
        return returnArra;

    }

   

// tools active ul li
$('#v-pills-tools .nav-link').on('click', function(e){
    var thi = $(this);
    thi.closest("ul").find('.active').removeClass("active");
    thi.addClass("active");
}); 

// Hide or show Tools opotions
function hideAllTools(){
    $('#linecolor').closest('div').hide();
    $('#linewidth').closest('div').hide();
}
function hideElement()
{
    
	clearDrawingMode();
}
function hideLineColorTool(){
    $('#linecolor').closest('div').hide();
}
function hideLineWidthTool(){
    $('#linewidth').closest('div').hide();
}
function showAllTools(){
    $('#linecolor').closest('div').show();
    $('#linewidth').closest('div').show();
}
function showLineColorTool(){
    $('#linecolor').closest('div').show();
}

function showLineWidthTool()
{
    $('#linewidth').closest('div').show();
}
function init()
{
    fabric.Image.fromURL(base_url+'/static/sloper/images/demo/product_template.png',
      	function (img) {
			img.set("erasable", false);
			img.scaleToWidth(531);
			img.clone((img) => {
				canvas.add(
					img
					.set({
						left: 0,
						top: 0,
						// clipPath: new fabric.Circle({
						// radius: 200,
						// originX: "center",
						// originY: "center"
						// }),
						angle: 90
					})
					.scale(0.25)
				);
				canvas.renderAll();
			});


			img.set({ opacity: 1 });
			function animate() {
				img.animate("opacity", img.get("opacity") === 0.7 ? 1 : 1, {
					duration: 1000,
					onChange: canvas.renderAll.bind(canvas),
					onComplete: animate
				});
			}
			// animate();
			canvas.setBackgroundImage(img);
			img.set({ erasable:false });
			canvas.renderAll();

			//for preview
			img.set("erasable", false);
			img.scaleToWidth(531);
			img.set({ opacity: 1 });
			canvas2.setBackgroundImage(img);
			img.set({ erasable:false });
			canvas2.renderAll();

		}
    );
}
function initialBrushFunction()
{
	addDrawingModeBrush();
	$('.nav-item').children('a').removeClass('active');
	$('#pills-design-li-tab').addClass('active');
}
function renderIcon(ctx, left, top, styleOverride, fabricObject)
{
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
}
function renderIcon1(ctx, left, top, styleOverride, fabricObject)
{
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(cloneImg, -size/2, -size/2, size, size);
    ctx.restore();
}
function renderIcon2(ctx, left, top, styleOverride, fabricObject)
{
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(rotateImg, -size/2, -size/2, size, size);
    ctx.restore();
}


function addCanvasOverBoxColor(color) {
	$(".canvasOverBox").css("background-color", color);
	$(".canvasOverBox1").css("background-color", color);
}

function changeDressColor(color)
{
	// console.log(color);
	removeTexture();
	if(this.event.target.type == 'color') {
		addColorPickerColorToDress(color)
	} else {
		AddColorToDress(color);
	}
}

function addColorPickerColorToDress(color) {
	removeDressColor()
	$(this.event.target).siblings('div').css('display','flex');
	addCanvasOverBoxColor(color)
	$(this.event.target).attr("onclick","removeDressColor()");
	importExportCanvas()
}
function removeDressColor()
{
	// $('.jsImgTemplate > .check-shape').css('display','none');
	$('.color_pallet .check-shape, .water_color .check-shape, #texture-color-picker .check-shape').css('display','none')
	let color = $(this.event.target).closest('.color_pallet, .water_color').css('background-color')
	$(this.event.target).closest('.color_pallet, .water_color').attr('onclick', `changeDressColor('${color}')`)
	// console.log($(this.event.target).closest('.check-shape'), "closest")
	$(".canvasOverBox").css("background-color", 'transparent');
	$(".canvasOverBox1").css("background-color", 'transparent');
	importExportCanvas()
}
function AddColorToDress(color)
{
	removeDressColor()
	$(this.event.target).children('div').css('display','flex');
	addCanvasOverBoxColor(color)
	$(this.event.target).attr("onclick","removeDressColor()");
	importExportCanvas()
}
//START undo redo goes from here!!!!
canvas.on('object:added',function()
{
  if(!isRedoing)
  {
    h = [];
  }
  isRedoing = false;
});
var isRedoing = false;
var h = [];
function undo()
{
 	canvas.discardActiveObject();
 	$('#deleteBtn').css('display','none');
	$('#cloneBtn').css('display','none');
  if(canvas._objects.length>0)
  {
   	h.push(canvas._objects.pop());
   	canvas.renderAll();
  }
}
function redo()
{
 	canvas.discardActiveObject();
 	$('#deleteBtn').css('display','none');
	$('#cloneBtn').css('display','none');
  if(h.length>0)
  {
   	isRedoing = true;
   	canvas.add(h.pop());
  }
}
//END of redo undo


//delete active object
function deleteActiveObj()
{
    canvas.remove(canvas._activeObject);
	canvas.requestRenderAll();
	$('#deleteBtn').css('display','none');
	$('#cloneBtn').css('display','none');
}
//clone active object
function cloneActiveObj()
{
	if(canvas._activeObject)
	{
		canvas._activeObject.clone(function(cloned) {
			cloned.left += 10;
			cloned.top += 10;
			evented: true,
			canvas.add(cloned);
			canvas.setActiveObject(cloned);
		});
	}
}
//copy delete buttons
$('.upper-canvas').click(function(){
	// console.log(canvas);
	if(canvas._activeObject)
	{
		$('#deleteBtn').css('display','inline');
		$('#cloneBtn').css('display','inline');
		// canvas._activeObject.fill='red';
		// canvas.renderAll();
	}
	else
	{
		$('#deleteBtn').css('display','none');
		$('#cloneBtn').css('display','none');
	}
});
//preview test
function setPreview()
{
	var pre_background_image = $('.canvasOverBox').css('background-image');
	var pre_background_size = $('#zoom_in').val();
	var pre_background_color = $('.canvasOverBox').css('background-color');
	document.getElementById('image2').src=base_url+'/static/sloper/images/demo/product_template.png';
	$('#image2').css('background-image',"url(" + canvas.toDataURL({format:'png'}) + ")");
	$('.image1').css('background-image',pre_background_image);
	$('.image1').css('background-size',pre_background_size+'%');
	$('#image2').css('background-color',pre_background_color);
 	$('#modal-preview').modal('show');
 	// var JSon  = canvas.toDataURL();
 	// JSon  = JSON.stringify(JSon);
 	// canvas1.loadFromJSON(JSon, canvasJSONCallBack, function(o, object) {
  	// console.log(JSon);
  	// canvas1.setActiveObject(object);
  // });
}
function canvasJSONCallBack() {
    canvas1.renderAll();
    canvas1.calcOffset();    
}		
//zoom in out 
function backgroundZoom(zoom)
{
	$('.canvasOverBox').css('background-size',zoom+'%');
	// CHNAGES BY DISHANK
	$('.canvasOverBox1').css('background-size',zoom+'%');
	// CHNAGES BY DISHANK
	
}

function setImageColor(color) 
{
	var activeObject = canvas._activeObject;
  	// console.log(color); // test
  	// console.log(activeObject);
  	// for (var i = 0; i < activeObject.path.length; i++) {
   //      activeObject.path[i].fill(color);
   //    }
   activeObject.fill = color;
	// activeObject.path.forEach(function(path) {path.fill = color});
  	canvas.renderAll();
}
//SVG color change
function changeSVGColorWithIndexColor(results) 
{
    let activeObject = canvas.getActiveObject();
    if (activeObject && activeObject._objects)
    {
        activeObject._objects[results[0].id].set(
        {
            fill: results[0].value
        }); 
    }
    canvas.renderAll();
    importExportCanvas();
}

// $('.upper-canvas ').click(function(){
// 	var activeObj = canvas.getActiveObject();
// 	console.log(activeObj);
// })

function setColorOFDrawing(color)
{
	// console.log(canvas)
	if(canvas.getActiveObject())
	{
		canvas.getActiveObject().set("fill", color);
    	canvas.renderAll();
	}
}

canvas.on('mouse:up', function(obj) {
	setSvgActive()
	setDrawingColor();
	importExportCanvas(); 
});
//set SVG  active
function setSvgActive()
{
	$('#dynamicColor').html('');
	$('#customTxt').html('');
	if(canvas.getActiveObject() && canvas.getActiveObject()._objects)
	{
		console.log(canvas.getActiveObject()._objects)
		$('#customTxt').html("Choose Color: ");
		for (var i = 0; i < canvas.getActiveObject()._objects.length; i++) 
		{
			var dynamicColor = canvas.getActiveObject()._objects[i].fill;
			$('#dynamicColor').append('<input type="color" onchange="changeSVGColorWithIndexColor($(this))" value="'+dynamicColor+'" id="'+i+'" />');
		}

	}
	
}
//set drawing color 
function setDrawingColor()
{
	setColorOFDrawing('blue');
}

// save canvas data to browser session storage for anonymous user
// function saveDesignToSessionSorage() {
// 	const canvasData = JSON.stringify(canvas.toJSON())
// 	sessionStorage.setItem('sloperDesignData', canvasData)
// }

// function getSaveDesignFromSessionSorage() {
// 	const canvasData = sessionStorage.getItem('sloperDesignData')
// 	canvas2.loadFromJSON(canvasData);
// }

// console.log(getSaveDesignFromSessionSorage())
/*

PROBLEM WHEN IMPORTEXPORTCANVAS() CALL THEN SESSIONSTORAGE SAVE CANVAS CHANGES
AND WHEN PAGE REFRESH THEN IMPORTEXPORTCANVAS CALL() SAVE NEW FRESH CANVAS DATA


*/
//Export canvas  and import to canvas2
function importExportCanvas()
{
	canvas2.loadFromJSON(canvas.toJSON())
	fabric.Image.fromURL(base_url+'/static/sloper/images/demo/product_template.png',
		function (img2)
		{
			img2.set("erasable", false);
			img2.scaleToWidth(533);
			img2.set({ opacity: 1 , globalCompositeOperation:'source-over'});
			canvas2.add(img2);
			img2.set({ erasable:false });
			canvas2.renderAll();
		}
  	);
  	canvas2.renderAll();
	// saveDesignToSessionSorage()
}

$(document).ready(function(){
	$('.action_btn').click(function(){
		importExportCanvas();
	});
});