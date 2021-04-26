Attribute VB_Name = "repeat_8_For"
Option Explicit

Sub repeatLesson8()

    Dim i As Long
    
    For i = 1 To 10
    
        Range("A" & i) = i
    
    Next i

End Sub


Sub repeatLesson8_2()

    Dim i As Long
    Dim cellChecked As Range
    
    For Each cellChecked In Range("B2:B20")
    
        cellChecked = i
        i = i + 1
            
    Next cellChecked

End Sub

Sub repeatLesson8_3()

    Dim i As Long
    Dim cellChecked As Range
    
    For Each cellChecked In Range("D7:G10")
    
        cellChecked = i
        i = i + 1
            
    Next cellChecked

End Sub

Sub repeatLesson8_()

    Dim sheetChecked As Worksheet
        
    For Each sheetChecked In ThisWorkbook.Worksheets
        
        MsgBox sheetChecked.Name
                
    Next sheetChecked

End Sub
