<h5>User Address</h5>
<div class="row pl-3 pr-3">
    <div class="col-md-4 p-1">
        <label>Unit/Floor No.</label>
        <input type="text" name="unit" class="form-control geo-border-primary" maxlength="100" placeholder="Unit/Floor no." value="{{$data->address->unit ?? ''}}">
    </div>
    <div class="col-md-4 p-1">
        <label>Building</label>
        <input type="text" name="building" class="form-control geo-border-primary" maxlength="100" placeholder="Building" value="{{$data->address->building ?? ''}}">
    </div>
    <div class="col-md-4 p-1">
        <label>Block</label>
        <input type="text" name="block" class="form-control geo-border-primary" maxlength="100" placeholder="Block" value="{{$data->address->block ?? ''}}">
    </div>
</div>
<br>
<div class="row pl-3 pr-3">
	<div class="col-md-4 p-1">
	    <label>Lot</label>
	    <input type="text" name="lot" class="form-control geo-border-primary" maxlength="100" placeholder="Lot" value="{{$data->address->lot ?? ''}}">
	</div>
	<div class="col-md-4 p-1">
	    <label>Phase</label>
	    <input type="text" name="phase" class="form-control geo-border-primary" maxlength="100"  placeholder="Phase" value="{{$data->address->phase ?? ''}}">
	</div>
	<div class="col-md-4 p-1">
	    <label>House no.</label>
	    <input type="text" name="house_no" class="form-control geo-border-primary" maxlength="100" placeholder="House no." value="{{$data->address->house_no ?? ''}}">
	</div>
</div>
<br>
<div class="row pl-3 pr-3">
    <div class="col-md-4 p-1">
        <label>Street</label>
        <input type="text" name="street" class="form-control geo-border-primary" maxlength="100"  placeholder="Street" value="{{$data->address->street ?? ''}}">
    </div>
    <div class="col-md-4 p-1">
        <label>Subdivision</label>
        <input type="text" name="subdivision" class="form-control geo-border-primary" maxlength="100"  placeholder="Subdivision" value="{{$data->address->subdivision ?? ''}}">
    </div>
    <div class="col-md-4 p-1">
        <label>Barangay</label>
        <input type="text" name="barangay" class="form-control geo-border-primary" required maxlength="100" placeholder="Barangay" value="{{$data->address->barangay ?? ''}}">
    </div>
</div>
<div class="row pl-3 pr-3">
	<div class="col-md-4 p-1">
	    <label>Province</label>
	    <select class="form-control geo-border-primary" id="province" name="province" required>
	        <option selected>Select province</option>
	        @foreach ($provinces as $province)
	        <option value="{{$province->id}}" @if(($data->address->zipcode->cityId->province_id ?? '') == $province->id) selected @endif>
	            {{$province->province}}
	        </option>
	        @endforeach
	    </select>
	</div>
	<div class="col-md-4 p-1">
	    <label>City</label>
	    <select class="form-control geo-border-primary" id="city" name="city"  required>
	        <option selected>Select city</option>
	        @foreach ($cities ?? [] as $city)
	        <option value="{{$city->id}}" @if(($data->address->zipcode->cityId->provinceId->id ?? '') == $city->id) selected @endif>
	            {{$city->city}}
	        </option>
	        @endforeach
	    </select>
	</div>
	<div class="col-md-4 p-1">
	    <label>Zipcode</label>
	    <select class="form-control geo-border-primary" name="zipcode" id="zipcode" required>
	        <option selected>Select zipcode</option>
	        @foreach ($zipcodes ?? [] as $zipcode)
	        <option value="{{$zipcode->id}}" @if(($data->address->zipcode_id ?? '') == $zipcode->id) selected @endif>
	            {{$zipcode->area}} - {{$zipcode->zip_code_number}}
	        </option>
	        @endforeach
	    </select>
	</div>
</div>