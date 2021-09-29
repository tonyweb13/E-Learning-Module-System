<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    
	protected $primaryKey = 'id';
  public $timestamps = false;
  protected $guarded = [];

  protected $appends = [
      'label',
      'value',
      'file_name'
  ];

  //for init auto complte label data-> your data want to show
  public function getFileNameAttribute() {
      return basename($this->file);
  }

  //for init auto complte label data-> your data want to show
  public function getLabelAttribute() {
      return $this->title;
  }
  
  //for init auto complte label data-> your data want to show
  public function getValueAttribute() {
      return $this->id;
  }

  public static function paginatedSearch($keyword){

        $results = self::where(function($q) use($keyword) {
                                    $q->where('title', 'LIKE', '%'.$keyword.'%');
                               })
                               ->where('is_deleted',0)
                               ->paginate(2);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return $results;
  }

}
