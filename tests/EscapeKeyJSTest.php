<?php

/*
 * Escape key JS package for Bear Framework
 * https://github.com/ivopetkov/escape-key-js-bearframework-addon
 * Copyright (c) Ivo Petkov
 * Free to use under the MIT license.
 */

/**
 * @runTestsInSeparateProcesses
 */
class EscapeKeyJSTest extends BearFramework\AddonTests\PHPUnitTestCase
{

    /**
     * 
     */
    public function testOutput()
    {
        $app = $this->getApp();

        $html = '<html><head><link rel="client-packages-embed" name="escapeKey"></head></html>';
        $result = $app->clientPackages->process($html);

        $this->assertTrue(strpos($result, 'ivoPetkov.bearFrameworkAddons.escapeKey') !== false);
    }
}
