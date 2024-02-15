<?php
namespace App\Helpers;
class ScanDirectory {
    function scan($dir, $sorting_order = SCANDIR_SORT_ASCENDING)
    {

        /****************************************************************************/
        // Roll through the scandir values.
        $files = array();
        foreach (scandir($dir, $sorting_order) as $file) {
            if ($file[0] === '.') {
                continue;
            }
            $files[$file] = filemtime($dir . '/' . $file);
        } // foreach

        /****************************************************************************/
        // Sort the files array.
        if ($sorting_order == SCANDIR_SORT_ASCENDING) {
            asort($files, SORT_NUMERIC);
        } else {
            arsort($files, SORT_NUMERIC);
        }

        /****************************************************************************/
        // Set the final return value.
        $ret = array_keys($files);

        /****************************************************************************/
        // Return the final value.
        return $ret;
    }
}