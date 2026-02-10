import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
    // Initialize the access control system
    let accessControlState = AccessControl.initState();
    include MixinAuthorization(accessControlState);

    // User Profile Type
    public type UserProfile = {
        name : Text;
    };

    let userProfiles = Map.empty<Principal, UserProfile>();

    // User Profile Management
    public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
        if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
            Runtime.trap("Unauthorized: Only users can access profiles");
        };
        userProfiles.get(caller);
    };

    public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
        if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
            Runtime.trap("Unauthorized: Can only view your own profile");
        };
        userProfiles.get(user);
    };

    public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
        if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
            Runtime.trap("Unauthorized: Only users can save profiles");
        };
        userProfiles.add(caller, profile);
    };

    // Contact Form Types
    type Message = {
        author : Text;
        email : Text;
        content : Text;
        timestamp : Time.Time;
    };

    let messages = List.empty<Message>();

    // Public contact form submission - accessible to everyone including guests
    public shared ({ caller }) func submitMessage(author : Text, email : Text, content : Text) : async () {
        let newMessage : Message = {
            author;
            email;
            content;
            timestamp = Time.now();
        };
        messages.add(newMessage);
    };

    // Admin-only function to view all contact messages
    public query ({ caller }) func getMessages() : async [Message] {
        if (not (AccessControl.isAdmin(accessControlState, caller))) {
            Runtime.trap("Unauthorized: Only admins can view contact messages");
        };
        messages.toArray();
    };

    // Admin-only function to get message count
    public query ({ caller }) func getMessageCount() : async Nat {
        if (not (AccessControl.isAdmin(accessControlState, caller))) {
            Runtime.trap("Unauthorized: Only admins can view message statistics");
        };
        messages.size();
    };
};
