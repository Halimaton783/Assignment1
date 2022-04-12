<template>
    <div class="sidebar">
        <div class="title">
            Contract            
        </div>
        <div class="subtitle">
            Management Systems
        </div>
        
        <div class="menu-items">
            <router-link to="/" active-class="active" tag="button" exact class="side-btn" >
                <div class="link-container">
                    Dashboard
                </div>
            </router-link>
            <router-link to="/contracts" active-class="active" tag="button" exact class="side-btn" >
                <div class="link-container">
                    Contracts
                </div>
            </router-link>
            <router-link to="/events" active-class="active" tag="button" exact class="side-btn" >
                <div class="link-container">
                    Events & Reminders
                </div>
            </router-link>
            <router-link to="/complaints" active-class="active" tag="button" exact class="side-btn" >
                <div class="link-container">
                    Complaints
                </div>
            </router-link>
            <router-link to="/reporting" active-class="active" tag="button" exact class="side-btn" >
                <div class="link-container">
                    Reporting
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>



<style scoped>

.title {
    color: rgb(255, 255, 255);
    font-size: 25px;
    margin-top: 20px;
    font-style: italic;
}

.subtitle {
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-style: italic;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}

.menu-items > * {
    margin-top: 60px;
}

 .side-btn:focus {
    outline: none;
}

.side-btn.active {
    background-color: rgb(0, 0, 0);
    color: rgb(7, 215, 122);
    font-weight: 600;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    background-color: transparent;
}

.side-btn.active .link-container::before {
    top: -30px;
}

.side-btn.active .link-container::after {
    bottom: -30px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 30px;
    width: 30px;
}

</style>>
    
