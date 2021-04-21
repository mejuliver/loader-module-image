<?php
	namespace PDLoader;
	
	class Image extends Loader{	

		public function init($url=false){

			$assets = [];

			// append css
			if( !$url ){
				if( $this->config() && isset($this->config()['url'] ) ){
					$url = $this->config()['url'];
				}else{
					$url = $this->url();
				}
			}

			foreach (glob(__DIR__.'/dist/*') as $c) {
				$f = explode('.',$c);
				$raw = str_replace(__DIR__,$url.'loader/modules/Image',$c);
				if( $f[count($f)-1] == 'css' ){
				   $assets[] = [ 'type' => 'css', 'src' => $raw ];
				}
			}

			// append js
			foreach (glob(__DIR__.'/dist/*') as $c) {
				$f = explode('.',$c);
				$raw = str_replace(__DIR__,$url.'loader/modules/Image',$c);
				if( $f[count($f)-1] == 'js' ){
				    $assets[] = [ 'type' => 'js', 'src' => $raw ];
				}
			}

			echo "<script async defer>var image_config={ assets : '".json_encode($assets)."'};".trim(preg_replace('/\s+/', ' ',file_get_contents(__DIR__.'/loader.js')))."</script>\n";

		}


		public function img($lazy=true,$src,$src2=false,$alt='',$class=false,$id=false,$opts=''){
			// check if webp is supported
			$webp = 'nowebp';
			if( $this->checkWebp() ){
				$webp = 'webp';
			}

			$id = ( $id ) ? 'id="'.$id.'"' : '';
			$lazy = ( $lazy ) ? 'data-src="'.$src.'"' : '';
			$webp_data = ( $src2 ) ? 'data-webp-src="'.$src2.'"' : '';
			$classes = 'class="'.$webp.' ';

			if( $class ){
				$classes.=$class;
			}

			if( $lazy ){
				$classes.=' lazy';
			}

			$classes.='"';

			if( $lazy ){
				$lazy_data = 'data:image/gif;base64,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';
			}else{
				$lazy_data = ( $this->checkWebp() ) ? $src2 : $src;
			}

			if( trim( $opts )  === '' ){
				$opts='style="width:initial;"';
			}else{
				if( strpos($opts, 'style') ){
					if( !strpos($opts, 'width') ){
						$t = $opts;

						$arr = explode( 'style="', $t );

						array_unshift($arr,"width:initial;");

						$opts='style="'.implode( '', $arr);
					}
				}else{
					$opts = $opts.' style="width:initial"';
				}
			}


			echo '<img src="'.$lazy_data.'" data-original-src="'.$src.'" '.$lazy.' '.$webp_data.' '.$classes.' '.$id.' alt="'.$alt.'" '.$opts.'>';
			
		}

		private function checkWebp(){

			if( strpos( $_SERVER['HTTP_ACCEPT'], 'image/webp' ) !== false || strpos( $_SERVER['HTTP_USER_AGENT'], ' Chrome/' ) !== false ) {
				return true;
			}else{
				return false;
			}
			
		}

		public function onBuild(){
			if( file_exists(__DIR__.'/package.json') ){
				unlink(__DIR__.'/package.json');
			}
			if( file_exists(__DIR__.'/package-lock.json') ){
				unlink(__DIR__.'/package-lock.json');
			}
			if( file_exists(__DIR__.'/dist/index.html') ){
				unlink(__DIR__.'/dist/index.html');
			}
			if( file_exists(__DIR__.'/index.html') ){
				unlink(__DIR__.'/index.html');
			}
			if( file_exists(__DIR__.'/.gitignore') ){
				unlink(__DIR__.'/.gitignore');
			}
			if( file_exists(__DIR__.'/src') ){
				$this->deleteFolder(__DIR__.'/src');
			}
			if( file_exists(__DIR__.'/build') ){
				$this->deleteFolder(__DIR__.'/.phpintel');
			}
			if( file_exists(__DIR__.'/.phpintel') ){
				$this->deleteFolder(__DIR__.'/.phpintel');
			}
			if( file_exists(__DIR__.'/.cache') ){
				$this->deleteFolder(__DIR__.'/.cache');
			}
			if( file_exists(__DIR__.'/.git') ){
				$this->deleteFolder(__DIR__.'/.git');
			}

		}
		private function deleteFolder($dir){
			if(file_exists($dir)){
				$it = new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS);
				$files = new \RecursiveIteratorIterator($it,
				             \RecursiveIteratorIterator::CHILD_FIRST);

				foreach($files as $file) {
					chmod($file->getRealPath(),0755);
				    if ($file->isDir()){
				        rmdir($file->getRealPath());
				    } else {
				        unlink($file->getRealPath());
				    }
				}
				rmdir($dir);
			}
			
		}	


	}