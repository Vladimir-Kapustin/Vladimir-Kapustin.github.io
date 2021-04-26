Attribute VB_Name = "repeat_3_5_6_7_SeeDescription"
Option Explicit

Sub repeatLesson3()
    
    Dim someWorkbook As Workbook
    Dim someSheet As Worksheet
    Dim someRange As Range
    
    Set someWorkbook = ThisWorkbook
    Set someSheet = Worksheets("sheet1")
    Set someRange = Worksheets(1).Range("C3:F6")
    
    MsgBox someWorkbook.Name
    MsgBox someSheet.Name
    MsgBox someRange.Address
    
    MsgBox someWorkbook.Name & " ----- " & someRange.Address
    
    
End Sub

Sub repeatLesson5()

    MsgBox Workbooks("lesson 10 do loop (while, until).xlsm").Name
    
End Sub

Sub repeat6()

    ThisWorkbook.Worksheets("sheet1").Range("A1,C5") = 10
    ThisWorkbook.Worksheets("sheet1").Range("A6:F11") = 20
    
    ThisWorkbook.Worksheets("sheet1").Range(Cells(16, 3), Cells(18, 5)) = 33
    ThisWorkbook.Worksheets("sheet1").Range(Cells(20, 3), Cells(23, 5)) = 44

End Sub

Sub repeat7()

    With Workbooks("Lesson 10 Do Loop (While, Until).xlsm").Worksheets("sheet1")
    
        Range("D2:E3") = 5
        Range("D2").AddComment ("Всякий разный текст, который можно добавить только к одной ячейке - к диапазону никак.")
        'Range("D2:E3").HorizontalAlignment (Center)
        Range("F13:G14") = 15
        Range("G19:H20") = 25
        Range("H16") = "Tarapapara"
        Range("H16").Offset(0, -1) = "Paratatara"
            
    End With

End Sub

Sub repeat7_2()

    With Workbooks("Lesson 10 Do Loop (While, Until).xlsm").Worksheets("sheet1").Range("D14")
    
        Range("D14") = 444
        .Offset(1, -1) = 444
        .Offset(2, 0) = 444
        .Offset(1, 1) = 444
        .Offset(0, 2) = 444
        .Offset(-1, 1) = 444
        .Offset(-2, 0) = 444
        .Offset(-1, -1) = 444
        .Offset(0, -2) = 444
        .Offset(1, -3) = 444
        
                
        Range("D14").Font.Color = vbRed
        .Offset(1, -1).Font.Color = vbRed
        .Offset(2, 0).Font.Color = vbRed
        .Offset(1, 1).Font.Color = vbRed
        .Offset(0, 2).Font.Color = vbRed
        .Offset(-1, 1).Font.Color = vbRed
        .Offset(-2, 0).Font.Color = vbRed
        .Offset(-1, -1).Font.Color = vbRed
        .Offset(0, -2).Font.Color = vbRed
        .Offset(1, -3).Font.Color = vbRed
        
            
    End With

End Sub


















