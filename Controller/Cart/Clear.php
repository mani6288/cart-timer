<?php
namespace Abd\CartTimer\Controller\Cart;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Checkout\Model\Cart;

class Clear extends Action
{
    protected $cart;

    public function __construct(Context $context, Cart $cart)
    {
        parent::__construct($context);
        $this->cart = $cart;
    }

    public function execute()
    {
        $this->cart->truncate()->save();
        return;
    }
}
