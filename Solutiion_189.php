<?php


class Solutiion_189
{
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        for($i=1;$i<$k;$i++) {
            array_unshift($nums,$nums[count($nums)]);
            array_pop($nums);
        }
    }
}
