Attribute VB_Name = "Module1"
Option Explicit

Sub learningDoLoop_While_I()

Dim checker As String

checker = "OK"

Do While checker = "OK"

    checker = InputBox("Пишите 'ОК' для повторения цикла!")

Loop


End Sub

Sub learningDoLoop_While_II()

Dim checker As String

Do
    checker = InputBox("Пишите 'ОК' для повторения цикла!")

Loop While checker = "OK"


End Sub

Sub learningDoLoop_Until_III()

Dim checker As String

Do Until checker = "OK"
    
    checker = InputBox("Не пишите 'ОК' для повторения цикла!")

Loop

End Sub

Sub learningDoLoop_Until_IV()

Dim checker As String

Do
    
    checker = InputBox("Не пишите 'ОК' для повторения цикла!")

Loop Until checker = "OK"

End Sub


Sub learningExitDo()
    
    Dim i As Long
    
    i = 1
    
    Do Until i >= 1000000
        ThisWorkbook.Worksheets(1).Range("A" & i) = i
        i = i + 1
        
        If ThisWorkbook.Worksheets(1).Range("A" & i) = "Stop" Then
        Exit Do
        End If
        
    Loop
    
End Sub

