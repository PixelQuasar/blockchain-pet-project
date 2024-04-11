pragma solidity >=0.8.0 <0.9.0;

contract Main {
    address owner;

    mapping(address => User) accounts;
    mapping(address => bool) isLogged;
    mapping(address => Post[]) posts;

    uint usersCounter = 0;

    struct User {
        address login;
        string password;
        string username;
        string avatarURL;
    }

    struct Post {
        User author;
        string text;
        uint likes;
        uint views;
        uint datetimeCreated;
    }
}
