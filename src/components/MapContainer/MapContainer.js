import React, { Component } from 'react';
import {Map, Polyline, Marker, GoogleApiWrapper} from 'google-maps-react';
import polyline from '@mapbox/polyline';

class MapContainer extends Component {
    render() {
        const triangleCoords = polyline.decode("e`miGhmocN{OiAsAiLiDgi@mL}m@oJir@{A_NaGm@mTdFgWzGgf@fXel@a@ou@yUe_@gl@l@us@oh@y_Aqk@w^yRoJcs@h^g{BtLwaBpTct@hDwCyZeB_aBiQgbBueA}hIwb@q~Bab@{nAkd@qaHtW_nAoK}dAe|CauFqcCi~GujAw{Hsw@ynF{Fm_DpEy`Cs[okCqaBkpKIktBpa@uhArYeq@`Dyp@_g@{zHqXo_E{s@{uBw^auBiPodFy^aiEaw@soGogBweNm{BamP{_AacH{XcqDea@ssGi{@wpFc@mw@~WgjBeRezBsg@cvBqZi_A_OojBom@coBeJk`CjNmcCfZ_jAyDy_Ag~@otIym@wjI{g@wcG_s@kvEcp@ixBm]{zAgSou@yk@ey@sd@ciCwEmoAmkAseByL{c@yF_uAsbAadFmiAgcCg{@uiE_r@stBuB}pA_CiiBs`@qcAokAscD}lAeaDuhAi`Da^_vBocBqsK_wAcuIao@ayB}l@elDcw@ajFeJoqB~X{fCmd@}mGiqBeaY}lAedPokA}|E|Bq|@qFo|Au]_hBaDm_BmPihEmOmnJoh@ewZeOapM_OknAhd@e{Abg@a_Cz]k~CdQeyAcDenB_t@o_Cs]{_Cuu@e}CocAwvAafAqwCsf@_wEa[uiIi\esHqKs}B_]iwAeTaqBgY{mDg@kx@dJc_AcIk}BsbBm`HihAstDya@kwBdBybDwQeiBya@clCcw@ytAkaA_iCouA{hBcf@uhAwv@sr@ocBmb@y`BamAynDeeDydCcsCcY{aCjHyaBmg@qaBsWe^ye@c@m{@Fk^wOgbB{nCarAoq@qv@arAgdA_vBsw@glAg}CcsFqdDglEw`GwqHo`AanAmUws@qQ_kAmYaz@isE{yHmi@qv@k^wRwgAgw@{gFurJ}aE}vHqlFa{L{~Gc`UmnCqaJ}}@ciCaiAwXm}AesEioBexGu|CgjK}oC{lKgo@wuDa@cuAzfAszDlV{`F}EonDik@wdCySo}@{BsqBoUcuEycB{`G{mAenDajDgbJ_{AsbEg}@spAqkC_`JcsA}|Eij@ed@meDeyHus@azCg{@szBujEygLm~EcvGaaGoiRseAqxCybAu}AqaAsxAum@s|AqMgwCwk@eyBaz@gs@sWuw@{bBo|Gyu@}nHk`BmeJNu`G~GelA{FatAfCsqExCgfC`ZqrAg@abAaf@apAc`A__Bgh@{}AwYgc@oj@uUwr@kkAmp@}gAkTsVeKL{E`MgHlFaFwF`EqI"
        );
        const example = [[19.502410,-99.239279], [25.774,-80.190]]
        const converted=[];
        const convertedCoords = triangleCoords.map((coordinate)=>{
            const json = {
                lat: coordinate[0],
                lng: coordinate[1],
            }
            converted.push(json)
        })
        console.log(converted)
        // const triangleCoords = [
        //     {lat: 19.502410, lng: -99.239279},
        //     {lat: 19.506061, lng: -99.242133},
        //     {lat: 32.321, lng: -64.757},
        //     {lat: 25.774, lng: -80.190}
        //   ];
        return (
            <Map 
                google={this.props.google}
                initialCenter={{
                    lat: 19.502410,
                    lng: -99.239279
                  }}
                zoom={15}

            >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <Polyline
                    path={converted}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA_OgzEpqOgUD08IVL0-imbK16xp8wkmIg")
  })(MapContainer)