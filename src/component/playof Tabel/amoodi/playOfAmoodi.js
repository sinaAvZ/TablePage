import React from 'react'
import Classes from './playof.module.css'
const playof = props => {

    return (
        <div className={Classes.PlayOf}>
            <div className={Classes.Winner}>
                <div className={Classes.PlayerInfo+' '+Classes.Downline} style={{ margin: 'auto' }}>
                    <div className={Classes.CoachName}>CoachName</div>
                    <div className={Classes.FighterName}>FighterName</div>
                </div>


            </div>
            <div className={Classes.Final}>
                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekdovom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>
            </div>
            <div className={Classes.Yekchaharom}>
                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekchaharom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>

                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekchaharom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline+' '+Classes.Downline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>

            </div>
            <div className={Classes.Yekhashtom}>
                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekhashtom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>
                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekhashtom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>  <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekhashtom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>
                <div className={Classes.TwoPlayer+' '+Classes.TwoPlayerYekhashtom}>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>

                    </div>
                    <div className={Classes.PlayerInfo+' '+Classes.Topline}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default playof