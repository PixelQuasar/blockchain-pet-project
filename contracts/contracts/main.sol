pragma solidity >=0.8.0 <0.9.0;

contract Main {
    address owner;
    uint usersCounter = 0;

    // mappings
    mapping(address => User) accounts;
    mapping(address => bool) isLogged;
    mapping(address => Post[]) posts;

    // object templates
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

    // modifiers
    modifier onlyIflLogged {
        require(isLogged(msg.sender), "You must login in your account.");
        _;
    }

    modifier onlyIfOwner {
        require(msg.sender == owner, "You are not owner!");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registration(string memory _username, string memory _password) public {
        require(accounts[msg.sender].login == address(0), "Account already exists.");

        accounts[msg.sender] = User({
            login: msg.sender,
            password: _password,
            username: _username,
            avatarURL: ""
        });

        usersCounter++;
    }

    function login(string memory username, string memory _password) public {
        require(accounts[msg.sender].login != address(0), "Login not found.");
        require(keccak256(bytes(accounts[msg.sender].password)) == keccak256(bytes(_password)), "Wrong password.");

        isLogged[msg.sender] = true;
    }

    function logout() public onlyIflLogged {
        isLogged[msg.sender] = false;
    }

    function getUser(address _userAddress) public view returns(User memory) {
        return accounts[_userAddress];
    }

    function createPost(string memory _text) public onlyIflLogged {
        User memory user = getUser(msg.sender);

        posts[msg.sender] = Post({
            author: user,
            text: _text,
            likes: 0,
            datetimeCreated: block.timestamp
        });
    }

    function getUserPosts(address _userAddress) external view onlyIflLogged returns(Post[] memory) {
        return posts[_usersAddress];
    }

    function isUserRegistered(address _userAddress) external view returns(bool) {
        return accounts[_userAddress].login != address(0);
    }

    function updateUserAvatarURL(string memory _avatarURL) public {
        User storage user = accounts[msg.sender];

        user.avatarURL = _avatarURL;
    }
}
