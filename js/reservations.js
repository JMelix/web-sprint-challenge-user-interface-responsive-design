/* Code to toggle between to html forms */
const waitList = document.getElementById('waitList');
        const orderToGo = document.getElementById('orderToGo');
        const form = document.getElementById('reservation-form');
		const toGoForm = document.getElementById('to-go-form');
		const hide = document.getElementById('hide');
		const show = document.getElementById("show");
        
		orderToGo.addEventListener('click', function() {
		 form.style.display = 'none';
		 hide.style.display = 'none';
		 toGoForm.style.display = "flex";
		 show.style.display = "flex";
		}, false);

		waitList.addEventListener('click', function() {
		  hide.style.display = "flex";
          form.style.display = "flex";
		  toGoForm.style.display = "none";
		  show.style.display = "none";
		},false);
	