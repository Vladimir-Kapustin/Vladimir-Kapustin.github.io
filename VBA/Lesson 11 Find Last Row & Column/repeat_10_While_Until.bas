Attribute VB_Name = "repeat_10_While_Until"
Option Explicit

Sub repeat_10()

    Dim count As Long
    Dim checker As String
    count = 1
    
    'Do Until checker = "OK" Or checker = "ok" Or checker = "oK" Or checker = "Ok"
    Do While checker <> "OK" And checker <> "ok" And checker <> "oK" And checker <> "Ok"
    
        checker = InputBox("��� ����, ����� ���� �� ���������� �� ������� 'OK'" & vbNewLine & " ����� �����: " & count)
        count = count + 1
        
    Loop
     
    


End Sub
