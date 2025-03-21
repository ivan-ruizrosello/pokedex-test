import styled from 'styled-components';

export const PokedexScreenWrapper = styled.main`
    background-image: url('/assets/images/bg.jpg');
    height: 100vh;
    border:0;
    margin:0;
    background-size: cover;

    .actions_container {
        position:absolute;
        right:30px;
        top:30px;

        img{
            width:100px;
            height:50px;
        }
    }

    .title_section {
        padding:50px 0;
        margin-bottom: 50px;
        height:80px;
        display:flex;
        justify-content:center;

        h2{
            font-family:'pokemon';
            letter-spacing:3px;
            font-size:50px !important;
        }
    }

    .action_img {
        cursor:pointer;
    }

    .btn_container {
        width:100%;
        display:flex;
        justify-content:center;
        margin:10px 0;

        button{
            border:none;
            color:white;
            padding:5px 15px;
            background-color: #385226;
        }
    }

`;

export default PokedexScreenWrapper;
