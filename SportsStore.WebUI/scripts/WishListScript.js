﻿$(document).ready(function () {
    $("#callWishList").click(function () {
        var current = $(this);
        var id = parseInt(current.prev().val());
        $.ajax({
            url: 'http://localhost:18375/WishList/GetItems',
            dataType: 'html',
            type: 'GET',
            data: { },
            success: function (data) {
                $('#wishListContainer').html(data);
                jQuery.noConflict();
                $('#myModal').modal();
            },
            error: function (xhr) {
                alert(xhr.statusText);
            }
        })
    })
    $('.removeWishListCart').click(function () {
        alert("dsad");
    })
})