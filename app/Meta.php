<?php

namespace App;

class Meta
{
    protected static $meta = [];
    protected static $property = [];

    public static function addMeta($name, $content)
    {
        static::$meta[$name] = $content;
    }
    public static function addProperty($name, $content)
    {
        static::$property[$name] = $content;
    }

    public static function render()
    {
        $html = '';
        foreach (static::$meta as $name => $content) {
            $html .= '<meta name="'.$name.'" content="'.$content.'" />'.PHP_EOL;
        }
        foreach (static::$property as $name => $content) {
            $html .= '<meta property="'.$name.'" content="'.$content.'" />'.PHP_EOL;
        }
        return $html;
    }
}