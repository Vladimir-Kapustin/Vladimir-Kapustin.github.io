Attribute VB_Name = "repeat_9_If"
Option Explicit

Sub colorSub()

    Dim cellChecked As Range
        
    For Each cellChecked In Range("C3:C9")
        If cellChecked = Range("C12") Then
                cellChecked.Interior.Color = vbGreen
                cellChecked.Offset(0, 1) = "Fine"
            ElseIf cellChecked = Range("C13") Then
                cellChecked.Interior.Color = vbMagenta
                cellChecked.Offset(0, 1) = "Good"
            ElseIf cellChecked = Range("C14") Then
                cellChecked.Interior.Color = vbRed
                cellChecked.Offset(0, 1) = "Satisfactory"
            Else: cellChecked.Interior.Color = vbBlue
                cellChecked.Offset(0, 1) = "No Estimation"
        End If
    Next
            
End Sub
