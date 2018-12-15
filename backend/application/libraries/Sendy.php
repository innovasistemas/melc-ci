<?php

class Sendy {

    private static $_instance;
    private /* @var $client \GuzzleHttp\Client */ $_client;
    private $_apiKey;
    private $_listId;
    private $_error;

    public function __construct() {
        $this->_client = new \GuzzleHttp\Client([
            // Base URI is used with relative requests
            'base_uri' => 'http://sendy.medellinjoven.com',
        ]);
        $this->_apiKey = 'CHgxLI9SMAfa7EhTt1Re';
        $this->_listId = '61TRiAsoRy2MtMJOIKlMQg';
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
        $result = $this->_client->post('/subscribe', $data);
        if ($result->getBody() == '1') {
            $this->_error = null;
            return true;
        } else {
            switch ($result->getBody()) {
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
        $result = $this->_client->post('/unsubscribe', $data);
        if ($result->getBody() == '1') {
            $this->_error = null;
            return true;
        } else {
            switch ($result->getBody()) {
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
        $result = $this->_client->post('/api/subscribers/delete.php', $data);
        if ($result->getBody() == '1') {
            $this->_error = null;
            return true;
        } else {
            $this->_error = $result->getBody();
            return false;
        }
    }

    public function isSubscribed($email) {
        $data = array(
            'email' => $email,
            'list_id' => $this->_listId,
            'api_key' => $this->_apiKey
        );
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
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
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
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
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
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
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
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
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
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
        $result = $this->_client->post('/api/subscribers/subscription-status.php', $data);
        switch ($result->getBody()) {
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
                $this->_error = $result->getBody();
                return false;
                break;
        }
    }

    function getErrorMessage() {
        return $this->_error;
    }

}
