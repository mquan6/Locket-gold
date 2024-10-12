let response = JSON.parse($response.body);

// Giả lập phản hồi thành công từ máy chủ khi mua hàng
response = {
    "status": "success",
    "product_id": "locket_gold_subscription",
    "expires_date": "2099-12-31T23:59:59Z",
    "purchase_date": "2024-01-01T00:00:00Z"
};

$done({body: JSON.stringify(response)});
