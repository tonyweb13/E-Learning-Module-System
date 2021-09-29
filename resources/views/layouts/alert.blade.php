<div class="modal animated bounceInDown" data-backdrop="static" data-keyboard="false" id="validation_modal" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-dialog-centered modal-sm" role="document">
		<div class="modal-content bordered p-2" style="margin-top: -20%">
			<div>
				<center>
					<br>
					<i class="fa fa-exclamation-circle text-danger" style="font-size: 4em"></i>
					<h3 id="validation_title"></h3>
					<ul style="text-align: center; list-style-type: none !important; margin: 20px 0px 10px 0px">
						@foreach ($errors->all() as $error)
						<li>{{ $error }}</li>
						@endforeach
					</ul>
					<div data-dismiss="modal" aria-label="Close" class="p-2 bg-danger rounded">
						<a href="#" class="text-light">Dismiss</a>
					</div>
				</center>
			</div>
		</div>
	</div>
</div>

@if ($errors->any())
<script type="text/javascript">
	$('#validation_modal').modal('show');
	$('#validation_title').html('Error');
</script>
@endif

@if (session('error'))
<script type="text/javascript">
	Swal.fire({
		confirmButtonText: 'OKAY',
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		title: 'Error',
		html: '{{Session::get("error")}}',
		icon: 'error',
		width: '300px',
		customClass: {
			confirmButton: 'btn btn-danger swal-okay-button',
			title: 'swal-title',
			content: 'swal-subtitle'
		}
	});
</script>
@endif

@if (session('success'))
<script type="text/javascript">
	Swal.fire({
		confirmButtonText: 'OKAY',
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		title: 'Success',
		html: '{{Session::get("success")}}',
		icon: 'success',
		width: '300px',
		customClass: {
			confirmButton: 'btn geo-primary swal-okay-button',
			title: 'swal-title',
			content: 'swal-subtitle'
		}
	});
</script>
@endif