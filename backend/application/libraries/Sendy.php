<?php

class Sendy {

    private static $_instance;
    private /* @var $client Client */ $_client;
    private $_baseUri;
    private $_apiKey;
    private $_listId;
    private $_error;
    
    public function __construct() {
        $this->_baseUri = 'http://sendy.medellinjoven.com';
        $this->_apiKey = 'CHgxLI9SMAfa7EhTt1Re';
        $this->_listId = '61TRiAsoRy2MtMJOIKlMQg';
        $this->_client = curl_init();
        curl_setopt($this->_client, CURLOPT_POST, true);
        curl_setopt($this->_client, CURLOPT_RETURNTRANSFER, true);
    }
    /** @return Sendy */
    public static function getInstance() {
        self::$_instance = (!isset(self::$_instance)) ? new Sendy() : self::$_instance;
        return self::$_instance;
    }

    public function subscribe($email, $name = null) {
        $data = array(
            'email' => $email,
            'list' => $this->_listId,
            'referrer' => $_SERVER['HTTP_REFERER'],
            'boolean' => 'true'
        );
        if ($name) $data['name'] = $name;
     
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/subscribe');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        
        if ($result == '1') {
            $this->_error = null;
            return true;
        } else {
            switch ($result) {
                case 'Invalid email address.':
                    $this->_error = 'El correo electrónico ingresado no es válido';
                    break;
                case 'Already subscribed.':
                    $this->_error = 'El correo electrónico ya se encuentra suscrito al boletín';
                    break;
                case 'Some fields are missing.':
                    $this->_error = 'Faltan algunos campos por diligenciar';
                    break;
                case 'Invalid list ID.':
                    $this->_error = 'La lista a la que intenta suscribirse no existe';
                    break;
            }
            return false;
        }
    }
    public function unsubscribe($email) {
        $data = array(
            'email' => $email,
            'list' => $this->_listId,
            'boolean' => 'true'
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/unsubscribe');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        if ($result == '1') {
            $this->_error = null;
            return true;
        } else {
            switch ($result) {
                case 'Invalid email address.':
                    $this->_error = 'El correo electrónico ingresado no es válido';
                    break;
                case 'Some fields are missing.':
                    $this->_error = 'Faltan algunos campos por diligenciar';
                    break;
            }
            return false;
        }
    }
    public function delete($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/delete.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        if ($result == '1') {
            $this->_error = null;
            return true;
        } else {
            $this->_error = $result;
            return false;
        }
    }

    public function isSubscribed($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Subscribed':
                $this->_error = null;
                return true;
                break;
            case 'Unsubscribed':
            case 'Unconfirmed':
            case 'Bounced':
            case 'Soft bounced':
            case 'Complained':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }
    public function isUnsubscribed($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Unsubscribed':
                $this->_error = null;
                return true;
                break;
            case 'Subscribed':
            case 'Unconfirmed':
            case 'Bounced':
            case 'Soft bounced':
            case 'Complained':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }
    public function isUnconfirmed($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Unconfirmed':
                $this->_error = null;
                return true;
                break;
            case 'Subscribed':
            case 'Unsubscribed':
            case 'Bounced':
            case 'Soft bounced':
            case 'Complained':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }
    public function isBounced($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Bounced':
                $this->_error = null;
                return true;
                break;
            case 'Subscribed':
            case 'Unsubscribed':
            case 'Unconfirmed':
            case 'Soft bounced':
            case 'Complained':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }
    public function isSoftBounced($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Soft bounced':
                $this->_error = null;
                return true;
                break;
            case 'Subscribed':
            case 'Unsubscribed':
            case 'Unconfirmed':
            case 'Bounced':
            case 'Complained':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }
    public function isComplained($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        curl_setopt($this->_client, CURLOPT_URL, $this->_baseUri.'/api/subscribers/subscription-status.php');
        curl_setopt($this->_client, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($this->_client);
        switch ($result) {
            case 'Complained':
                $this->_error = null;
                return true;
                break;
            case 'Subscribed':
            case 'Unsubscribed':
            case 'Unconfirmed':
            case 'Bounced':
            case 'Soft bounced':
                return false;
                break;
            default:
                $this->_error = $result;
                return false;
                break;
        }
    }

    function getErrorMessage() {
        return $this->_error;
    }
   
}
