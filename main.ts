input.onButtonPressed(Button.A, function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Test Servo_Wheel: Right"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "'A' is Right Button from Driver's Viewpoint"
    )
    basic.showLeds(`
        . . . # .
        . . # # #
        . . . # .
        . . . # .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    0,
    50
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    0,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
})
input.onButtonPressed(Button.AB, function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Test Servo_Wheels: Left + Right"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Press Both 'A' + 'B' Buttons"
    )
    basic.showLeds(`
        . # . # .
        # # # # #
        . # . # .
        . # . # .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    50,
    50
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    0,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
})
input.onButtonPressed(Button.B, function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Test Servo_Wheel: Left"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "'B' is Left Button from Driver's Viewpoint"
    )
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        . # . . .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    50,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    0,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    quest_Note_4.quest_Show_String_For_Note_Big_Func(
    "UNDER CONSTRUCTION :)"
    )
    if (false) {
        if (true) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            50,
            50,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        if (true) {
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            -50,
            -50,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        if (true) {
            basic.showLeds(`
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            50,
            -50,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        if (true) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            -50,
            50,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        if (true) {
            basic.showLeds(`
                # # . . .
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_Turn_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            quest_Turn_Type_Enum.Pivot,
            quest_Turn_Direction_Enum.right,
            quest_Turn_Power_Enum.Lo,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        if (true) {
            basic.showLeds(`
                # # . . .
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            EnE_Servos.quest_Set_Turn_WithTimer_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            quest_Turn_Type_Enum.Pivot,
            quest_Turn_Direction_Enum.left,
            quest_Turn_Power_Enum.Lo,
            quest_Turn_Duration_Enum.msec_3000,
            quest_Debug_Show_Enum.Off
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
})
quest_Note_3.quest_Show_String_For_Note_Big_Func(
"Setup Stack"
)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Micro:bit Display: Upside-Down ~ Driver's Viewpoint"
)
display.rotateTo(display.Direction.UpsideDown)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Setup Servo_Wheels to Stop (0% Power)"
)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # . # .
    `)
EnE_Servos.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
0,
0
)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Setup 1\" SmartScreen"
)
quest_Dashboard.quest_Show_Oled_Cleared_Func(
)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
"BotId:" + quest_Dashboard.quest_Get_SerialName_OfMyBot_Func(
),
0,
0
)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
"Wheel_Left:Left_Button",
0,
1
)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
"Wheel_Right:Right_Button",
0,
2
)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
"Wheels_Both:Both_Buttons",
0,
3
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2026 Encourage and Empower. All rights reserved."
    )
})
