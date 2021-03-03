import React, { Component } from 'react';
import classes from './ServicesSection.module.css';
import deliveryIcon from './delivery.png';

export default class ServicesSection extends Component {

    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.headCont}>
                    <p className={classes.headText}>HIGHLIGHTED SERVICES</p>
                    <p
                        className={classes.servicesText}
                        style={{
                            fontSize: this.props.servicesDescription.fontSize,
                            fontFamily: this.props.servicesDescription.fontFamily,
                            color: this.props.servicesDescription.fontColor,
                            fontWeight: this.props.servicesDescription.bold ? "bold" : "normal",
                            textDecoration: this.props.servicesDescription.underline ? "underline" : "none",
                            fontStyle: this.props.servicesDescription.italic ? "italic" : "normal",
                            textAlign: this.props.servicesDescription.align
                        }}
                        
                    >
                        {this.props.servicesDescription.text}
                    </p>
                </div>
                <div className={classes.servicesCont}>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                               <img className={classes.serviceIcon} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IlhNTElEXzIyNV8iPgoJPHBhdGggaWQ9IlhNTElEXzIyNl8iIGQ9Ik00NTQuMzU2LDI4Ni4xNzhjLTMuMjg2LTQuNzUxLTguNjktNy41ODgtMTQuNDU1LTcuNTg4aC0xMS43MTdsLTI0LjIwMi02OC40MzEgICBjLTEuMzgxLTMuOTA1LTUuNjY3LTUuOTUyLTkuNTcxLTQuNTdjLTMuOTA1LDEuMzgyLTUuOTUyLDUuNjY3LTQuNTcsOS41NzJsMjUuOTcsNzMuNDNjMS4wNiwyLjk5NiwzLjg5Myw0Ljk5OSw3LjA3MSw0Ljk5OWgxNy4wMiAgIGMxLjIxMiwwLDEuODg1LDAuNzgzLDIuMTE4LDEuMTJjMC4zMTcsMC40NTksMC42MjQsMS4xOTQsMC4yODQsMi4wOTVjLTMuODEzLDEwLjExMy0xNS42NTYsMTYuMDg2LTM0LjI0MSwxNy4yNyAgIGMtMS4wOTUsMC4wNTctMi4xMTEtMC42MjktMi40NzgtMS42OTJsLTQ3LjA5NS0xMzYuOTc3bC0yLjc5OC01Ni44MjdsMjIuNjcxLDY0LjA5M2MxLjA4OSwzLjA3OCwzLjk4Miw1LjAwMSw3LjA3MSw1LjAwMSAgIGMwLjgzLDAsMS42NzQtMC4xMzksMi41MDEtMC40MzJjMy45MDUtMS4zODEsNS45NTEtNS42NjYsNC41Ny05LjU3MUwzNTMuMTE2LDY2LjMybC0wLjQ1NS05LjIzOCAgIGMtMS4wMjgtMjAuODg5LTE4LjIxNi0zNy4yNTItMzkuMTMxLTM3LjI1MmgtMjkuNTU3VjcuNWMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTctNy41LDcuNXYyMS42ODQgICBjMCwxNi4zMzUsMTMuMjksMjkuNjI0LDI5LjYyNSwyOS42MjRoMTYuNDAxYy0wLjIyMiw5LjcxNi04LjE5NCwxNy41NTItMTcuOTYzLDE3LjU1MmgtODIuMDczICAgYy05Ljc2OSwwLTE3Ljc0Mi03LjgzNi0xNy45NjMtMTcuNTUySDIxMy40YzE2LjMzNSwwLDI5LjYyNS0xMy4yODksMjkuNjI1LTI5LjYyNFY3LjVjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNSAgIHMtNy41LDMuMzU3LTcuNSw3LjV2MTIuMzNoLTI5LjU1NGMtMjAuOTE1LDAtMzguMTA0LDE2LjM2My0zOS4xMzEsMzcuMjUxbC0wLjQ1NSw5LjIzOUw4My44MTgsMjc4LjU5SDcyLjEwMSAgIGMtNS43NjUsMC0xMS4xNjksMi44MzctMTQuNDU1LDcuNTg4Yy0zLjIzNiw0LjY3OS0zLjk3NywxMC42My0xLjk4MywxNS45MThjNC4yMTgsMTEuMTg4LDE1Ljg1MywyNC45NDMsNDcuMzM5LDI2Ljk0OSAgIGMwLjM2MiwwLjAyMiwwLjcyMywwLjAzNCwxLjA4MywwLjAzNGM3LjM4NCwwLDE0LjA3OC00LjczNSwxNi41MTgtMTEuODJsMzAuMjU5LTg4LjAwOGwtMC45NDIsMTkuMTIxICAgYy0wLjIwNCw0LjEzOCwyLjk4NSw3LjY1Niw3LjEyMiw3Ljg2YzAuMTI1LDAuMDA2LDAuMjUsMC4wMDksMC4zNzUsMC4wMDljMy45NzIsMCw3LjI4Ny0zLjEyLDcuNDg0LTcuMTMxbDUuMzgxLTEwOS4yNzloODUuMzQ4ICAgdjk4LjYzaC0yOS4xM2MtNC4xNDIsMC03LjUsMy4zNTctNy41LDcuNXY0NC42ODFjMCw0LjE0MywzLjM1OCw3LjUsNy41LDcuNWgyOS4xM3YyNi4zaC05MS44MmMtMC45MjgsMC0xLjUyNy0wLjQ4NC0xLjgwMi0wLjc3MyAgIGMtMC4yNzYtMC4yOS0wLjczMi0wLjkxNi0wLjY4Ny0xLjg0OGwxLjg4LTM4LjE5YzAuMjA0LTQuMTM4LTIuOTg1LTcuNjU2LTcuMTIyLTcuODZjLTQuMTI2LTAuMTk1LTcuNjU2LDIuOTg1LTcuODU5LDcuMTIyICAgbC0xLjg4LDM4LjE5MWMtMC4yMzMsNC43NjQsMS41MTgsOS40NzYsNC44MDUsMTIuOTI5YzMuMjg2LDMuNDUsNy45MDIsNS40MywxMi42NjYsNS40M2gyNy40OTRsOC45NDgsNTIuNjA4ICAgYzAuNjIzLDMuNjU4LDMuNzk1LDYuMjQzLDcuMzg1LDYuMjQzYzAuNDE3LDAsMC44NDEtMC4wMzUsMS4yNjctMC4xMDdjNC4wODMtMC42OTQsNi44MzEtNC41NjcsNi4xMzYtOC42NTFsLTguNTItNTAuMDkzaDM5LjQ1NiAgIGw5LjY3LDE2NS40OTdjMC4yMzMsMy45ODYsMy41MzksNy4wNjMsNy40OCw3LjA2M2MwLjE0NywwLDAuMjk1LTAuMDA0LDAuNDQ0LTAuMDEzYzQuMTM1LTAuMjQxLDcuMjkyLTMuNzksNy4wNS03LjkyNSAgIGwtOS42MTgtMTY0LjYyMmg0MS41MTlsLTIxLjM1OSwxNjQuMDkyYy0wLjUzNSw0LjEwNywyLjM2MSw3Ljg3LDYuNDY5LDguNDA1YzAuMzI5LDAuMDQzLDAuNjU1LDAuMDYzLDAuOTc4LDAuMDYzICAgYzMuNzExLDAsNi45MzYtMi43NTQsNy40MjgtNi41MzNsMjEuNjEtMTY2LjAyN2gzMC41NDNjNC43NjQsMCw5LjM4LTEuOTc5LDEyLjY2Ni01LjQzYzMuMjg4LTMuNDUzLDUuMDM5LTguMTY1LDQuODA1LTEyLjkzICAgbC00LjUyMi05MS44MzFsMzAuMjYsODguMDEzYzIuNDM5LDcuMDgyLDkuMTMyLDExLjgxNiwxNi41MjIsMTEuODE1YzAuMzYsMCwwLjcyMi0wLjAxMSwxLjA4NS0wLjAzNCAgIGMzMS40NzgtMi4wMDUsNDMuMTEzLTE1Ljc2MSw0Ny4zMzEtMjYuOTQ3QzQ1OC4zMzMsMjk2LjgwOCw0NTcuNTkxLDI5MC44NTYsNDU0LjM1NiwyODYuMTc4eiBNMzMwLjAwMyw1OC4zOTIgICBjMC04LjA0Mi02LjU0Mi0xNC41ODQtMTQuNTgzLTE0LjU4NGgtMTYuODIyYy02LjA2MywwLTExLjI3NC0zLjcxLTEzLjQ4OC04Ljk3OGgyOC40MjFjMTIuOTA3LDAsMjMuNTE1LDEwLjA5OCwyNC4xNDksMjIuOTkgICBsMy4zLDY3LjAxSDI3MC42M1Y5MS4zNTloMjYuNDA1QzMxNS4yMTQsOTEuMzU5LDMzMC4wMDMsNzYuNTcsMzMwLjAwMyw1OC4zOTJ6IE0xMDYuNDE5LDMxMi4zNzggICBjLTAuMzY4LDEuMDY3LTEuMzkzLDEuNzUtMi40NzEsMS42OTdjLTE4LjU5My0xLjE4NS0zMC40MzctNy4xNTctMzQuMjUtMTcuMjcxYy0wLjMzOS0wLjg5OS0wLjAzMy0xLjYzNSwwLjI4NC0yLjA5NCAgIGMwLjIzMy0wLjMzNywwLjkwNi0xLjEyLDIuMTE4LTEuMTJoMTcuMDJjMy4xNzgsMCw2LjAxMS0yLjAwMyw3LjA3MS00Ljk5OWw2MC4xMi0xNzAuMDAybC0yLjc5OCw1Ni44MTdMMTA2LjQxOSwzMTIuMzc4eiAgICBNMTcxLjAyMSwxMjQuODNsMy4zLTY3LjAxMmMwLjYzNC0xMi44OTEsMTEuMjQyLTIyLjk4OCwyNC4xNDktMjIuOTg4aDI4LjQxN2MtMi4yMTQsNS4yNjgtNy40MjUsOC45NzgtMTMuNDg4LDguOTc4aC0xNi44MjIgICBjLTguMDQyLDAtMTQuNTgzLDYuNTQyLTE0LjU4MywxNC41ODRjMCwxOC4xNzksMTQuNzksMzIuOTY4LDMyLjk2OCwzMi45NjhoNDAuNjY4djMzLjQ3MUgxNzEuMDIxeiBNMzQxLjcxOCwxMzkuODNsMS4wMzQsMjEgICBIMjcwLjYzdi0yMUgzNDEuNzE4eiBNMjcwLjYzLDE3NS44M2g3Mi44NmwzLjA4NCw2Mi42M0gyNzAuNjNWMTc1LjgzeiBNMjM0LjAwMSwyNTMuNDZoMTEzLjMxM2wxLjQ2MSwyOS42ODFIMjM0LjAwMVYyNTMuNDZ6ICAgIE0zNDkuOTkzLDMyMy42NjdjLTAuMjc1LDAuMjg5LTAuODc1LDAuNzczLTEuODAyLDAuNzczaC03Ny41NnYtMjYuM2g3OC44ODNsMS4xNjYsMjMuNjc4ICAgQzM1MC43MjUsMzIyLjc1MSwzNTAuMjY5LDMyMy4zNzcsMzQ5Ljk5MywzMjMuNjY3eiIgZmlsbD0iIzVjM2QwMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggaWQ9IlhNTElEXzIzNV8iIGQ9Ik0yMjEuMDY0LDQyNC45NDJjLTAuNjk1LTQuMDg0LTQuNTY0LTYuODMtOC42NTItNi4xMzZjLTQuMDgzLDAuNjk0LTYuODMxLDQuNTY3LTYuMTM2LDguNjUxbDEzLjMxOCw3OC4zICAgYzAuNjIzLDMuNjU4LDMuNzk1LDYuMjQzLDcuMzg1LDYuMjQzYzAuNDE3LDAsMC44NDEtMC4wMzUsMS4yNjctMC4xMDdjNC4wODMtMC42OTQsNi44MzEtNC41NjcsNi4xMzYtOC42NTFMMjIxLjA2NCw0MjQuOTQyeiIgZmlsbD0iIzVjM2QwMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CgoKCgoKCgoKCgoKCgoKCjwvZz48L3N2Zz4=" />
                            </div>
                        </div>
                        <p
                            
                            className={classes.serviceHeading}
                            style={{
                                fontSize: this.props.s1H.fontSize,
                                fontFamily: this.props.s1H.fontFamily,
                                color: this.props.s1H.fontColor,
                                fontWeight: this.props.s1H.bold ? "bold" : "normal",
                                textDecoration: this.props.s1H.underline ? "underline" : "none",
                                fontStyle: this.props.s1H.italic ? "italic" : "normal",
                                textAlign: this.props.s1H.align
                            }}
                        >
                            {this.props.s1H.text}
                        </p>
                        <p
                            
                            className={classes.serviceDesc}
                            style={{
                                fontSize: this.props.s1D.fontSize,
                                fontFamily: this.props.s1D.fontFamily,
                                color: this.props.s1D.fontColor,
                                fontWeight: this.props.s1D.bold ? "bold" : "normal",
                                textDecoration: this.props.s1D.underline ? "underline" : "none",
                                fontStyle: this.props.s1D.italic ? "italic" : "normal",
                                textAlign: this.props.s1D.align
                            }}
                        >
                            {this.props.s1D.text}
                            
                        </p>
                    </div>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={deliveryIcon} alt="Delivery-Icon" />
                            </div>
                        </div>
                        <p
                            
                            className={classes.serviceHeading}
                            style={{
                                fontSize: this.props.s2H.fontSize,
                                fontFamily: this.props.s2H.fontFamily,
                                color: this.props.s2H.fontColor,
                                fontWeight: this.props.s2H.bold ? "bold" : "normal",
                                textDecoration: this.props.s2H.underline ? "underline" : "none",
                                fontStyle: this.props.s2H.italic ? "italic" : "normal",
                                textAlign: this.props.s2H.align
                            }}
                        >
                            {this.props.s2H.text}
                        </p>
                        <p
                            
                            className={classes.serviceDesc}
                            style={{
                                fontSize: this.props.s2D.fontSize,
                                fontFamily: this.props.s2D.fontFamily,
                                color: this.props.s2D.fontColor,
                                fontWeight: this.props.s2D.bold ? "bold" : "normal",
                                textDecoration: this.props.s2D.underline ? "underline" : "none",
                                fontStyle: this.props.s2D.italic ? "italic" : "normal",
                                textAlign: this.props.s2D.align
                            }}
                        >
                            {this.props.s2D.text}
                        </p>
                    </div>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTcgNTExLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA0LjkwMSwyOTcuNDc0Yy03LjE3NC0xMC4wMjQtMTkuMTI2LTE2Ljc2LTMxLjE4OS0xNy41OGMtOS44NDctMC42NjMtMTguNzcsMi42NjItMjUuMTE4LDkuMzgyICAgIGMtMS4zOTMsMS40NzQtMi44OTYsMy4wOTMtNC40ODYsNC44MjdjLTcuMDIzLTYuNDM0LTE2LjIyNi0xMC41NzQtMjUuNTA0LTExLjIwNGMtOS44NTEtMC42Ni0xOC43NzEsMi42NjMtMjUuMTE4LDkuMzgyICAgIGMtMTMuODE3LDE0LjYyNi0zOC4yODMsNDMuMTk4LTU3LjQ5Nyw2NS45NDRjLTIuNTA2LTEuNDgyLTUuMTg3LTIuNzA0LTguMDIzLTMuNjIxYy05LjE4NC0zLjk1NS0xMzUuNzg3LTU4LjAyNC0xOTEuOTA1LTU4LjAyNCAgICBjLTkwLjY1MSwwLTEzMi4yOTcsNDguNzI1LTEzNC4wMjUsNTAuNzk4Yy0yLjY1MSwzLjE4Mi0yLjIyMSw3LjkwMSwwLjk1MiwxMC41NjFjMy4xNzQsMi42NjEsNy45MSwyLjI0NCwxMC41OC0wLjkyMiAgICBjMC4wOTYtMC4xMTMsOS44MjUtMTEuNTA1LDI5LjY5Ny0yMi43M2MxOC4zMTYtMTAuMzQ0LDQ5LjI4NC0yMi42NzgsOTIuNzk1LTIyLjY3OGM1My45MTQsMCwxODQuOTczLDU2LjM3MiwxODYuMjkxLDU2Ljk0MSAgICBjMi40MDksMS4wMzksNC44OTQsMS44MzQsNy4wOTQsMy4zMDJjMi4wNzcsMS4zODYsMy45MzYsMy4wOTcsNS40OTQsNS4wNDhjMy4wMjYsMy43OTEsNC45MjEsOC40ODEsNS4zMTksMTMuMzE5ICAgIGMwLjgzNywxMC4xMzYtNC44NTIsMTkuOTI5LTE0LjAzNSwyNC4yNThjLTUuNzkxLDIuNzMtMTEuOTEzLDIuODEyLTE3Ljk5NywxLjE0NWwtODEuOTk2LTIyLjU4MyAgICBjLTMuOTQ4LTEuMDg4LTguMTU0LDEuMzAzLTkuMjQxLDUuMjQ5Yy0xLjA4NywzLjk0OCwxLjMwMiw4LjE1Myw1LjI0OSw5LjI0bDgxLjg4MiwyMi41NTJjOS45NDksMy4wNjksMjAuODIxLDIuMDY1LDMwLjAzOS0yLjc2OSAgICBjOS4zNjMtNC45MDksMTYuMjU0LTEzLjE3MiwxOS40MDItMjMuMjYzYzEuMDI4LTMuMjkyLDEuNjA4LTYuNjUxLDEuNzY1LTEwLjAwOGwyMS45OTItMi4zMTYgICAgYzEuOTQ2LTAuMjA1LDMuNzM2LTEuMTYxLDQuOTg5LTIuNjY1YzAuNTQyLTAuNjUxLDU0LjQ2Ny02NS4zODgsNzcuMjEzLTg5LjQ2NGM5LjQ1NC0xMC4wMTIsMjYuMzM0LTIuOTE1LDMzLjE2MSw2LjYyMyAgICBjMTAuNDk4LDE0LjY2Ny0yLjU0OCwzMC42NzgtNi43OTYsMzUuMjM3Yy0yMC44NzYsMjIuMzk4LTU5LjE1Nyw2OC41NDUtNjYuMDM4LDc2Ljg2M2wtMTU1LjgwMyw3Ny45MDFsLTgwLjE2MS0zMy43NTIgICAgYy0zLjc3NC0xLjU4OS04LjI1MywwLjIzNC05Ljg0Miw0LjAxYy0xLjU4OSwzLjc3NCwwLjIzNSw4LjI1Miw0LjAwOSw5Ljg0MWw4My4zNDgsMzUuMDkzYzIuMDA0LDAuODQ1LDQuMzMzLDAuNzY4LDYuMjc3LTAuMjA0ICAgIGwxNjAuMzE1LTgwLjE1OGMwLjkzOC0wLjQ2OSwxLjc2Ny0xLjEyOSwyLjQzNS0xLjkzOWMwLjQ0LTAuNTMzLDQ0LjI1OS01My41OTMsNjYuNDU2LTc3LjQxICAgIEM1MTMuMjE5LDMzNC4xNzMsNTE2LjI5NSwzMTMuMzkxLDUwNC45MDEsMjk3LjQ3NHogTTM3Mi43MTMsMzc3LjA5OWwtMTkuNTgxLDIuMDYyYy0xLjM4OC0zLjkzLTMuMzktNy42MjMtNS45MTQtMTAuOTM4ICAgIGMxNi4zNjctMTkuMzc0LDQyLjk2My01MC41NTYsNTcuMTkyLTY1LjYxOGM0LjExMS00LjM1Myw5LjQzMS00Ljk2OSwxMy4xNzMtNC43MDhjNS44OTEsMC40MDEsMTEuOTMyLDMuMTgsMTYuNDc1LDcuMzgzICAgIEM0MTEuNTEyLDMzMC43MzIsMzgwLjgxNywzNjcuMzkyLDM3Mi43MTMsMzc3LjA5OXoiIGZpbGw9IiM1YzNkMDMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTE0Ni45ODksNDQ2LjkzOGwtMzIuMDYxLTEzLjVjLTAuOTIzLTAuMzg5LTEuOTE1LTAuNTg5LTIuOTE3LTAuNTg5SDcuODA2Yy00LjE1LDAtNy41MTUsMy4zNjQtNy41MTUsNy41MTUgICAgYzAsNC4xNTEsMy4zNjUsNy41MTUsNy41MTUsNy41MTVoMTAyLjY4N2wzMC42NjIsMTIuOTFjNC4wMzQsMS42OTksOC43NjItMC41MDksMTAuMDgzLTQuNjY3ICAgIEMxNTIuMzk4LDQ1Mi40NzIsMTUwLjUxNSw0NDguNDIyLDE0Ni45ODksNDQ2LjkzOHoiIGZpbGw9IiM1YzNkMDMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM5OS41MTcsMjUwLjU2N2wtMzEuOTk5LDQuNTcyYzI2LjAyMS0yNy44NzksNDAuNTc2LTY0LjQwMiw0MC41NzYtMTAzLjM0MUM0MDguMDk0LDY4LjA5NywzMzkuOTk3LDAsMjU2LjI5NiwwICAgIGMtODMuNzAyLDAtMTUxLjc5OCw2OC4wOTctMTUxLjc5OCwxNTEuNzk4YzAsMzMuNTg1LDEwLjc0Niw2NS40MTIsMzEuMDc2LDkyLjAzOGMxOS42NzYsMjUuNzcsNDcuNTc3LDQ0Ljg4Niw3OC41NjUsNTMuODI3ICAgIGM0LjA5OSwxLjE4MSw4LjQ1MS0xLjM5Nyw5LjQwNy01LjU0NWMwLjg4NS0zLjgzNS0xLjQ2NS03LjgwNS01LjI0MS04Ljg5NmMtNTguMTU5LTE2Ljc4LTk4Ljc3OC03MC44MjUtOTguNzc4LTEzMS40MjUgICAgYzAtNzUuNDE1LDYxLjM1NS0xMzYuNzY5LDEzNi43NjktMTM2Ljc2OWM3NS40MTUsMCwxMzYuNzY5LDYxLjM1NCwxMzYuNzY5LDEzNi43NjljMCwzNy4yODEtMTQuOCw3Mi4xMTEtNDEuMDgxLDk3Ljc0NXYtMzkuNjMxICAgIGMwLTQuMTUxLTMuMzY0LTcuNTE1LTcuNTE1LTcuNTE1Yy00LjE1MSwwLTcuNTE1LDMuMzY0LTcuNTE1LDcuNTE1djU2LjExYzAsNC40OTMsNC4xMjYsOC4wNzksOC41NzgsNy40NGw1Ni4xMS04LjAxNiAgICBjNC4wNTQtMC41NzksNi45NTctNC40NDgsNi4zNzctOC41MDJDNDA3LjQ0LDI1Mi44OTMsNDAzLjU2NiwyNDkuOTk0LDM5OS41MTcsMjUwLjU2N3oiIGZpbGw9IiM1YzNkMDMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1Ni4yOTYsMTQ0LjI4MmgtOC4wMTZjLTkuMTE2LDAtMTYuNTMyLTcuNDE3LTE2LjUzMi0xNi41MzJjMC05LjExNiw3LjQxNy0xNi41MzMsMTYuNTMyLTE2LjUzM2gzMi4wNjMgICAgYzQuMTUxLDAsNy41MTUtMy4zNjQsNy41MTUtNy41MTVjMC00LjE1MS0zLjM2NC03LjUxNS03LjUxNS03LjUxNUgyNjMuODF2LTguNTE3YzAtNC4xNTEtMy4zNjQtNy41MTUtNy41MTUtNy41MTUgICAgYy00LjE1LDAtNy41MTUsMy4zNjQtNy41MTUsNy41MTV2OC41MTdoLTAuNTAxYy0xNy40MDMsMC0zMS41NjIsMTQuMTU5LTMxLjU2MiwzMS41NjJzMTQuMTU5LDMxLjU2MiwzMS41NjIsMzEuNTYyaDguMDE2ICAgIGM5LjExNiwwLDE2LjUzMyw3LjQxNywxNi41MzMsMTYuNTMycy03LjQxNywxNi41MzItMTYuNTMzLDE2LjUzMmgtMzIuMDYzYy00LjE1LDAtNy41MTUsMy4zNjQtNy41MTUsNy41MTUgICAgczMuMzY1LDcuNTE1LDcuNTE1LDcuNTE1aDI0LjU0OHY4LjUxN2MwLDQuMTUxLDMuMzY1LDcuNTE1LDcuNTE1LDcuNTE1YzQuMTUxLDAsNy41MTUtMy4zNjQsNy41MTUtNy41MTV2LTkuNDI3ICAgIGMxMy43ODYtMy4zODEsMjQuMDQ3LTE1LjgzNywyNC4wNDctMzAuNjUxQzI4Ny44NTgsMTU4LjQ0MSwyNzMuNjk5LDE0NC4yODIsMjU2LjI5NiwxNDQuMjgyeiIgZmlsbD0iIzVjM2QwMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
                            </div>
                        </div>
                        <p
                            
                            className={classes.serviceHeading}
                            style={{
                                fontSize: this.props.s3H.fontSize,
                                fontFamily: this.props.s3H.fontFamily,
                                color: this.props.s3H.fontColor,
                                fontWeight: this.props.s3H.bold ? "bold" : "normal",
                                textDecoration: this.props.s3H.underline ? "underline" : "none",
                                fontStyle: this.props.s3H.italic ? "italic" : "normal",
                                textAlign: this.props.s3H.align
                            }}
                        >
                            {this.props.s3H.text}
                        </p>
                        <p
                            
                            className={classes.serviceDesc}
                            style={{
                                fontSize: this.props.s3D.fontSize,
                                fontFamily: this.props.s3D.fontFamily,
                                color: this.props.s3D.fontColor,
                                fontWeight: this.props.s3D.bold ? "bold" : "normal",
                                textDecoration: this.props.s3D.underline ? "underline" : "none",
                                fontStyle: this.props.s3D.italic ? "italic" : "normal",
                                textAlign: this.props.s3D.align
                            }}
                        >
                            {this.props.s3D.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}