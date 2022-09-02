<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\View\View;

class ViewProvider extends ServiceProvider
{

    protected $bundles = null;

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //

        \View::composer('layout', fn(View $view) => $view->with($this->bundles ?? $this->getBundles()));
    }

    private function getBundles()
    {
        $content = file_get_contents(public_path('assets/js/index.html'));

        preg_match('/<link rel="stylesheet" href="([^"]+.css)">/i', $content, $links);
        $this->bundles['style'] = ($links[1] ?? '');

        preg_match_all('/\<script src="([^"]+.js)" (.*?)?\>(.|\\n)*?\<\/script\>/', $content, $links);
        $this->bundles['scripts'] = $links[1] ?? [];

        $this->bundles['appId'] = config('site.apple_app_id', null);

        return $this->bundles;
    }
}
